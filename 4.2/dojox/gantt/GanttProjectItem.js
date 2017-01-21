//>>built
define(["./GanttTaskItem","dojo/_base/declare","./GanttProjectControl","dojo/domReady!"],function(e,f){return f("dojox.gantt.GanttProjectItem",[e],{constructor:function(d){this.id=d.id;this.name=d.name||this.id;this.startDate=d.startDate||new Date;this.parentTasks=[]},getTaskById:function(d){for(var a=0;a<this.parentTasks.length;a++){var b=this.getTaskByIdInTree(this.parentTasks[a],d);if(b)return b}return null},getTaskByIdInTree:function(d,a){if(d.id==a)return d;for(var b=0;b<d.cldTasks.length;b++){var c=
d.cldTasks[b];if(c.id==a||0<c.cldTasks.length&&0<c.cldTasks.length&&(c=this.getTaskByIdInTree(c,a)))return c}return null},addTask:function(d){this.parentTasks.push(d);d.setProject(this)},deleteTask:function(d){var a=this.getTaskById(d);if(a)if(a.parentTask)for(var b=a.parentTask,a=0;a<b.cldTasks.length;a++){var c=b.cldTasks[a];if(c.id==d){c.nextChildTask?c.previousChildTask?(c.previousChildTask.nextChildTask=c.nextChildTask,c.nextChildTask.previousChildTask=c.previousChildTask):c.nextChildTask.previousChildTask=
null:c.previousChildTask&&(c.previousChildTask.nextChildTask=null);b.cldTasks.splice(a,1);break}}else for(a=0;a<this.parentTasks.length;a++)if(b=this.parentTasks[a],b.id==d){b.nextParentTask?b.previousParentTask?(b.previousParentTask.nextParentTask=b.nextParentTask,b.nextParentTask.previousParentTask=b.previousParentTask):b.nextParentTask.previousParentTask=null:b.previousParentTask&&(b.previousParentTask.nextParentTask=null);this.parentTasks.splice(a,1);break}}})});