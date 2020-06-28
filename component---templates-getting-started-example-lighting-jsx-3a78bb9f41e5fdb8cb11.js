(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{jXQH:function(o,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var e=n("q1tI"),r=n.n(e),i=n("z0FI"),a=n("UD/Y"),p=n("HGgG"),u=n("bjw9"),l=n("2urO"),v=n("IObG"),c=n("lHlH"),s=n("Wmn6"),m=n("1+Ew");var d=function(o){var t,n;function e(){return o.apply(this,arguments)||this}n=o,(t=e).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,e.getInfo=function(){return"\n<p>\nDrawing a phong-shaded cube\n</p>\n"};var r=e.prototype;return r.onInitialize=function(o){var t=o.gl;Object(c.j)(t,{depthTest:!0,depthFunc:t.LEQUAL});var n=new l.a(t,{data:"vis-logo.png"}),e=[0,0,5],r=new m.a,i=(new m.a).lookAt({eye:e}),u=new m.a;return{model:new a.a(t,{vs:"  attribute vec3 positions;\n  attribute vec3 normals;\n  attribute vec2 texCoords;\n\n  uniform mat4 uModel;\n  uniform mat4 uMVP;\n\n  varying vec3 vPosition;\n  varying vec3 vNormal;\n  varying vec2 vUV;\n\n  void main(void) {\n    vPosition = (uModel * vec4(positions, 1.0)).xyz;\n    vNormal = mat3(uModel) * normals;\n    vUV = texCoords;\n    gl_Position = uMVP * vec4(positions, 1.0);\n  }\n",fs:"  precision highp float;\n\n  uniform sampler2D uTexture;\n  uniform vec3 uEyePosition;\n\n  varying vec3 vPosition;\n  varying vec3 vNormal;\n  varying vec2 vUV;\n\n  void main(void) {\n    vec3 materialColor = texture2D(uTexture, vec2(vUV.x, 1.0 - vUV.y)).rgb;\n    vec3 surfaceColor = lighting_getLightColor(materialColor, uEyePosition, vPosition, normalize(vNormal));\n\n    gl_FragColor = vec4(surfaceColor, 1.0);\n  }\n",geometry:new p.a,uniforms:{uTexture:n,uEyePosition:e},modules:[s.a],moduleSettings:{material:{specularColor:[255,255,255]},lights:[{type:"ambient",color:[255,255,255]},{type:"point",color:[255,255,255],position:[1,2,1]}]}}),modelMatrix:r,viewMatrix:i,mvpMatrix:u}},r.onRender=function(o){var t=o.gl,n=o.aspect,e=o.tick,r=o.model,i=o.mvpMatrix,a=o.viewMatrix,p=o.modelMatrix;p.identity().rotateX(.01*e).rotateY(.013*e),i.perspective({fov:Math.PI/3,aspect:n}).multiplyRight(a).multiplyRight(p),Object(v.a)(t,{color:[0,0,0,1],depth:!0}),r.setUniforms({uMVP:i,uModel:p}).draw()},r.onFinalize=function(o){o.model.delete()},e}(u.a);"undefined"==typeof window||window.website||(new d).start();var g=function(o){var t,n;function e(){return o.apply(this,arguments)||this}return n=o,(t=e).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,e.prototype.render=function(){var o=this.props.pageContext,t=o&&o.exampleConfig||{};return r.a.createElement(i.a,{AnimationLoop:d,exampleConfig:t})},e}(r.a.Component)}}]);