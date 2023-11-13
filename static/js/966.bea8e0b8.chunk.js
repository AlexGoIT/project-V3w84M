"use strict";(self.webpackChunkproject_V3w84M=self.webpackChunkproject_V3w84M||[]).push([[966],{8758:function(n,e,i){i.d(e,{Z:function(){return q}});var t,a,o,r,s,d,c,l,p,x=i(1413),u=i(9439),h=i(5705),m=i(2791),f=i(168),g=i(9549),b=g.Z.div(t||(t=(0,f.Z)(["\n  width: 100%;\n  position: relative;\n"]))),Z=g.Z.label(a||(a=(0,f.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 14px;\n  transform: translateY(-50%);\n  text-transform: capitalize;\n  color: rgba(239, 237, 232, 0.6);\n  font-size: 14px;\n  line-height: calc(18 / 14);\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: calc(24 / 16);\n  }\n\n  input:focus + &,\n  input:not(:placeholder-shown) + & {\n    top: -18px;\n    transform: translateY(0%);\n    left: 0px;\n    font-size: 12px;\n    line-height: 140%;\n\n    @media screen and (min-width: 768px) {\n      font-size: 14px;\n    }\n  }\n"]))),w=g.Z.input(o||(o=(0,f.Z)(["\n  width: 100%;\n  max-height: 46px;\n  padding: 14px;\n  background-color: transparent;\n  color: #efede8;\n  caret-color: #efede8;\n  font-size: 14px;\n  line-height: calc(18 / 14);\n  border-radius: 12px;\n  border: 1px solid rgba(239, 237, 232, 0.3);\n\n  @media screen and (min-width: 768px) {\n    max-height: 52px;\n    font-size: 16px;\n    line-height: calc(24 / 16);\n  }\n\n  &:focus-visible {\n    border-color: #e6533c;\n  }\n\n  &.validation-failed {\n    border-color: #d80027;\n  }\n\n  &.validation-success {\n    border-color: #3cbf61;\n  }\n\n  &::placeholder {\n    color: transparent;\n  }\n\n  &::-ms-reveal {\n    display: none;\n  }\n\n  &:-webkit-autofill {\n    -webkit-box-shadow: 0 0 0 1000px rgb(4, 4, 4) inset;\n    -webkit-text-fill-color: #efede8;\n    caret-color: #efede8;\n  }\n"]))),j=g.Z.button(r||(r=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 50%;\n  right: 14px;\n  transform: translateY(-50%);\n  background-color: transparent;\n  border: none;\n"]))),k=g.Z.svg(s||(s=(0,f.Z)(["\n  fill: #efede8;\n"]))),v=g.Z.span(d||(d=(0,f.Z)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  bottom: -18px;\n  left: 0px;\n  font-feature-settings: 'clig' off, 'liga' off;\n  font-size: 10px;\n  line-height: calc(15 / 10);\n  letter-spacing: 0.12px;\n  color: #d80027;\n\n  @media screen and (min-width: 768px) {\n    font-size: 12px;\n    line-height: calc(18 / 12);\n  }\n"]))),y=g.Z.svg(c||(c=(0,f.Z)(["\n  width: 12px;\n  height: 12px;\n\n  @media screen and (min-width: 768px) {\n    width: 14px;\n    height: 14px;\n  }\n"]))),_=(0,g.Z)(y)(l||(l=(0,f.Z)(["\n  fill: #d80027;\n"]))),z=(0,g.Z)(v)(p||(p=(0,f.Z)(["\n  color: #3cbf61;\n"]))),P=i(4596),A=i(184),q=function(n){var e=(0,h.U$)(n),i=(0,u.Z)(e,2),t=i[0],a=i[1],o=(0,m.useState)(!1),r=(0,u.Z)(o,2),s=r[0],d=r[1],c=a.touched&&a.error,l=a.touched&&!a.error;return(0,A.jsxs)(b,{children:[(0,A.jsx)(w,(0,x.Z)((0,x.Z)((0,x.Z)({type:"name"===n.name||"password"===n.name&&s?"text":n.name},t),n),{},{className:c?"validation-failed":l?"validation-success":void 0})),(0,A.jsx)(Z,{htmlFor:n.id||n.name,children:n.name}),"password"===n.name&&(0,A.jsx)(j,{type:"button",onClick:function(){return d((function(n){return!n}))},children:(0,A.jsx)(k,{width:"20",height:"20",children:(0,A.jsx)("use",{href:"".concat(P.Z,"#").concat(s?"eye":"eye-off")})})}),c&&(0,A.jsxs)(v,{children:[(0,A.jsx)(_,{children:(0,A.jsx)("use",{href:"".concat(P.Z,"#error")})}),a.error]}),l&&(0,A.jsxs)(z,{children:[(0,A.jsx)(y,{children:(0,A.jsx)("use",{href:"".concat(P.Z,"#success")})}),{name:"Nice to meet you!",email:"Your email looks good and is ready for action.",password:"Password is okay."}[n.name]]})]})}},2181:function(n,e,i){i.d(e,{w:function(){return o},J:function(){return a}});var t=i(6727),a=t.Ry({name:t.Z_().required("Please enter your name"),email:t.Z_().matches(/^[a-zA-Z0-9_.-]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,"Doesn't look like a valid email.").required("Please enter your email address"),password:t.Z_().min(6,"Password must be at least 6 characters long").required("Please enter your password")}),o=t.Ry({email:t.Z_().matches(/^[a-zA-Z0-9_.-]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,"Doesn't look like a valid email.").required("Please enter your email address"),password:t.Z_().min(6,"Password must be minimum 6 characters long").required("Please enter your password")})},966:function(n,e,i){i.r(e),i.d(e,{default:function(){return R}});var t,a,o,r,s,d,c,l,p,x=i(5705),u=i(2181),h=i(8758),m=i(168),f=i(9549),g=i(1087),b=f.Z.div(t||(t=(0,m.Z)(["\n  width: 335px;\n\n  @media screen and (min-width: 768px) {\n    width: 496px;\n  }\n"]))),Z=f.Z.h1(a||(a=(0,m.Z)(["\n  color: #efede8;\n  font-size: 24px;\n  line-height: calc(28 / 24);\n  margin-bottom: 14px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 32px;\n    line-height: calc(44 / 32);\n    margin-bottom: 16px;\n  }\n"]))),w=f.Z.p(o||(o=(0,m.Z)(["\n  color: rgba(239, 237, 232, 0.3);\n  font-size: 14px;\n  line-height: calc(18 / 14);\n  margin-bottom: 28px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: calc(24 / 16);\n    margin-bottom: 32px;\n  }\n"]))),j=(0,f.Z)(x.l0)(r||(r=(0,m.Z)(["\n  width: 335px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 38px;\n  margin-bottom: 12px;\n\n  @media screen and (min-width: 768px) {\n    width: 364px;\n    gap: 40px;\n  }\n"]))),k=f.Z.button(s||(s=(0,m.Z)(["\n  margin-top: 10px;\n  display: flex;\n  padding: 12px 40px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  color: #efede8;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 18px;\n  border: none;\n  border-radius: 12px;\n  background: #e6533c;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 20px;\n    padding: 16px 60px;\n    font-size: 20px;\n    line-height: calc(24 / 20);\n  }\n\n  &:hover:not([disabled]),\n  &:focus-visible:not([disabled]) {\n    background: #ef8964;\n  }\n\n  &:disabled {\n    color: rgba(239, 237, 232, 0.6);\n    cursor: not-allowed;\n  }\n"]))),v=f.Z.span(d||(d=(0,m.Z)(["\n  color: rgba(239, 237, 232, 0.6);\n  font-feature-settings: 'clig' off, 'liga' off;\n  font-size: 12px;\n  line-height: calc(18 / 12);\n"]))),y=(0,f.Z)(g.rU)(c||(c=(0,m.Z)(["\n  color: #efede8;\n  font-feature-settings: 'clig' off, 'liga' off;\n  font-size: 12px;\n  line-height: 18px;\n  text-decoration-line: underline;\n"]))),_=i(9434),z=i(4289),P=i(5822),A=i(2881),q=i(7689),S=i(184),U=function(){var n=(0,_.I0)(),e=(0,q.s0)(),i=(0,_.v9)(z.M),t=(0,_.v9)(z.fN);return(0,S.jsxs)(b,{children:[(0,S.jsx)(Z,{children:"Sign Up"}),(0,S.jsx)(w,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),(0,S.jsx)(x.J9,{initialValues:{name:"",email:"",password:""},validationSchema:u.J,onSubmit:function(i,a){console.log(i),a.resetForm(),n((0,P.z2)(i)),t&&e("/profile")},children:function(n){var e=n.isValid,i=n.dirty,t=n.values;return(0,S.jsxs)(j,{children:[Object.keys(t).map((function(n){return(0,S.jsx)(h.Z,{name:n,id:n,required:!0,placeholder:"."},n)})),(0,S.jsx)(k,{type:"submit",disabled:!(e&&i),children:"Sign Up"})]})}}),(0,S.jsxs)(v,{children:["Already have an account?"," ",(0,S.jsx)(y,{to:"/signin",children:"Sign In"})]}),i&&(0,S.jsx)(A.Z,{})]})},V=i(2945),Y=i(3230),C=i(5521),F=i(5488),J=i(7338),M=i(7406),N=i(1149),$=f.Z.section(l||(l=(0,m.Z)(["\n  min-height: 100dvh;\n  padding-top: 24px;\n  background-image: image-set(\n    url(",") 1x,\n    url(",") 2x\n  );\n  background-repeat: no-repeat;\n  background-position: bottom right;\n\n  /* overflow: hidden; */\n\n  @media screen and (min-width: 768px) {\n    padding-top: 32px;\n    background-image: image-set(\n      url(",") 1x,\n      url(",") 2x\n    );\n  }\n\n  @media screen and (min-width: 1440px) {\n    background-image: image-set(\n      url(",") 1x,\n      url(",") 2x\n    );\n    background-size: contain;\n  }\n"])),V,Y,C,F,J,M),D=(0,f.Z)(N.j)(p||(p=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 90px;\n\n  @media screen and (min-width: 768px) {\n    gap: 140px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    gap: 151px;\n    padding-inline: 96px;\n  }\n"]))),I=i(1864),R=function(){return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)($,{children:(0,S.jsxs)(D,{children:[(0,S.jsx)(I.Z,{}),(0,S.jsx)(U,{})]})})})}},2945:function(n,e,i){n.exports=i.p+"static/media/auth_background_1x_mob.e7f375e3743d4387e7bd.jpg"},3230:function(n,e,i){n.exports=i.p+"static/media/auth_background_2x_mob.0aeda9d9741aacd5c830.jpg"},7338:function(n,e,i){n.exports=i.p+"static/media/welcome_background_1x_desk.c2bbbb7b7174497b20b3.jpg"},5521:function(n,e,i){n.exports=i.p+"static/media/welcome_background_1x_tab.a164db9bd43d39ccb003.jpg"},7406:function(n,e,i){n.exports=i.p+"static/media/welcome_background_2x_desk.2a249b1672f9eb6a45cf.jpg"},5488:function(n,e,i){n.exports=i.p+"static/media/welcome_background_2x_tab.653887b07d2a7ba155c9.jpg"}}]);
//# sourceMappingURL=966.bea8e0b8.chunk.js.map