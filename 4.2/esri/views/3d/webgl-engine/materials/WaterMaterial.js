// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/3d/webgl-engine/materials/WaterMaterial.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\r\n\r\n\x3csnippets\x3e\r\n\r\n\x3csnippet name\x3d"vertexShaderWater"\x3e\x3c![CDATA[\r\n\tuniform mat4 proj;\r\n\tuniform mat4 view;\r\n\tuniform mat4 model;\r\n\tattribute vec3 $position;\r\n\tvarying vec3 vpos;\r\n\r\n\tvoid main(void) {\r\n\t\tvpos \x3d (model * vec4($position, 1.0)).xyz;\r\n\t\tgl_Position \x3d proj * view * vec4(vpos, 1.0);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fragmentShaderWater"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tuniform vec3 color;\r\n\tuniform float scale;\r\n\tuniform float speed;\r\n\r\n\tuniform vec4 lightAmbient;\r\n\tuniform vec4 lightDiffuse;\r\n\tuniform vec4 lightSpecular;\r\n\tuniform vec3 lightDirection;\r\n\r\n\tuniform vec3 camPos;\r\n\r\n\tuniform sampler2D noiseTex;\r\n\tuniform sampler2D reflTex;\r\n\r\n\tuniform sampler2D depthTex;\r\n\tuniform int shadowMapNum;\r\n\tuniform vec4 shadowMapDistance;\r\n\tuniform mat4 shadowMapMatrix[4];\r\n\tuniform float depthHalfPixelSz;\r\n\r\n\tvarying vec3 vpos;\r\n\r\n\t$evalShadow\r\n\r\n\t$normal2envTC\r\n\r\n\t// TODO optimize?\r\n\tvec2 rotate(vec2 pos, float angle) {\r\n\t\tfloat c \x3d cos(angle);\r\n\t\tfloat s \x3d sin(angle);\r\n\t\treturn vec2(c * pos.x - s * pos.y, s * pos.x + c * pos.y);\r\n\t}\r\n\r\n\tfloat compDelta(vec2 pos) {\r\n\t\tconst float PI_THIRD \x3d 1.04719755;\r\n\r\n\t\tfloat result \x3d .0;\r\n\t\tfloat s \x3d 1.0;\r\n\t\tfor (int i \x3d 0; i \x3c 6; ++i) {\r\n\t\t\tvec2 tc \x3d pos / (20.0 * s);\r\n\t\t\ttc +\x3d rotate(vec2(1.0 + speed, .0), PI_THIRD * float(i));\r\n\t\t\tresult +\x3d s * texture2D(noiseTex, tc).r;\r\n\t\t\ts *\x3d 1.5;\r\n\t\t}\r\n\t\treturn result * scale * .2;\r\n\t}\r\n\r\n\tvoid main() {\r\n\t\tvec3 viewVec \x3d normalize(camPos - vpos);\r\n\r\n\t\tfloat d0 \x3d compDelta(vpos.xz);\r\n\t\tfloat dx \x3d compDelta(vpos.xz + vec2(.05, .0));\r\n\t\tfloat dz \x3d compDelta(vpos.xz + vec2(.0, .05));\r\n\r\n\t\tvec3 normal \x3d normalize(vec3(d0 - dx, .05, d0 - dz));\r\n\r\n\t\tfloat fresnel \x3d clamp(1.0 - 1.25 * dot(viewVec, normal), .0, 1.0);\r\n\r\n\t\tfloat shadow \x3d 0.0;\r\n\t\tif (halfPxSz \x3e\x3d .0) {\r\n\t\t\tshadow \x3d evalShadow(vpos, 1.0 / gl_FragCoord.w, depthTex, shadowMapNum, shadowMapDistance, shadowMapMatrix, depthHalfPixelSz);\r\n\t\t}\r\n\r\n\t\tvec3 reflDir \x3d reflect(-viewVec, normal);\r\n\t\tif (reflDir.y \x3c .02) reflDir.y \x3d 0.04 - reflDir.y;\r\n\r\n\t\tvec3 reflCol \x3d texture2D(reflTex, normal2envTC(reflDir)).rgb * lightAmbient.rgb*lightSpecular.w;\r\n\t\treflCol *\x3d .5 + max(lightDirection.y, .0) * .5; // ?\t+\r\n\t\tvec3 waterColor \x3d color * (lightAmbient.rgb * lightAmbient.w + (1.0 - shadow) * max(lightDirection.y, .0) * lightDiffuse.rgb * lightDiffuse.w);\r\n\t\tvec3 finalColor \x3d mix(waterColor, reflCol, .15 + .6 * fresnel);\r\n\r\n\t\tvec3 spec \x3d pow(max(dot(reflDir, lightDirection), .001), 80.0) * lightSpecular.rgb * lightSpecular.w * 2.0;\r\n\t\tfinalColor +\x3d (1.0 - shadow) * lightDiffuse.w * spec;\r\n\r\n\t\tgl_FragColor \x3d vec4(finalColor, 1.0);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3c/snippets\x3e'}});
define("dojo/text!./WaterMaterial.xml ./internal/MaterialUtil ../lib/RenderSlot ../../../webgl/Program ../lib/DefaultVertexAttributeLocations ../lib/DefaultVertexBufferLayouts ../../../webgl/Util".split(" "),function(m,e,p,q,r,s,t){var l=function(a,f,g,h,b,n){e.basicMaterialConstructor(this,n);var k=s.Pos3;this.dispose=function(){};this.getNoiseTextureId=function(){return a};this.getReflTextureId=function(){return f};this.getColor=function(){return g};this.getScale=function(){return h};this.getSpeed=
function(){return b};this.getOutputAmount=function(a){return a*t.getStride(k)/4};this.getVertexBufferLayout=function(){return k};this.fillInterleaved=function(a,b,u,c,d,f,g){e.fillInterleaved(a,b,u,c,k,d,f,g)};this.intersect=e.intersectTriangleGeometry;this.getGLMaterials=function(){return{color:v,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}};this.getAllTextureIds=function(){return[a,f]}},v=function(a,f,g){e.basicGLMaterialConstructor(this,a);var h=p.TRANSPARENT_MATERIAL,b=f.get("water");
f={noiseTextureId:a.getNoiseTextureId(),reflTextureId:a.getReflTextureId()};e.multiTextureGLMaterialConstructor(this,g,f,[["noiseTextureId",void 0,"noiseTex"],["reflTextureId",void 0,"reflTex"]]);var n=a.getColor(),k=a.getScale(),l=a.getSpeed(),m=Date.now();this.beginSlot=function(a){return h===a};this.getProgram=function(){return b};this.bind=function(a,c){a.bindProgram(b);this.bindTextures(a,b);b.setUniform3fv("color",n);b.setUniform1f("scale",k);var d=(Date.now()-m)/1E5*l,d=d-Math.floor(d);b.setUniform1f("speed",
d);c.shadowMap||b.setUniform1f("depthHalfPixelSz",-1)};this.release=function(a){};this.bindView=function(a,c){var d=c.origin;e.bindView(d,c.view,b);e.bindCamPos(d,c.viewInvTransp,b);c.shadowMap&&c.shadowMap.bindView(b,d)};this.bindInstance=function(a,c){b.setUniformMatrix4fv("model",c.transformation)};this.getDrawMode=function(a){return a.gl.TRIANGLES}};l.loadShaders=function(a,f,e,h){a._parse(m);a=new q(h,a.vertexShaderWater,a.fragmentShaderWater,r.Default3D);e.add("water",a)};return l});