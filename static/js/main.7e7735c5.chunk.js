(this.webpackJsonpportfolioweb=this.webpackJsonpportfolioweb||[]).push([[0],{28:function(e,a,t){},41:function(e,a,t){e.exports=t.p+"static/media/slide1.8bce7aef.webp"},42:function(e,a,t){e.exports=t.p+"static/media/slide2.7256f309.webp"},48:function(e,a,t){e.exports=t.p+"static/media/html-5.210e665e.svg"},49:function(e,a,t){e.exports=t.p+"static/media/css3.5398ae12.svg"},50:function(e,a,t){e.exports=t.p+"static/media/java.d99d55c8.svg"},51:function(e,a,t){e.exports=t.p+"static/media/C++.2abbe70f.svg"},52:function(e,a,t){e.exports=t.p+"static/media/spring.abd2d564.svg"},53:function(e,a,t){e.exports=t.p+"static/media/nodejs.6e22b021.svg"},54:function(e,a,t){e.exports=t.p+"static/media/express.f0d2e9fd.svg"},55:function(e,a,t){e.exports=t.p+"static/media/react.259c73a6.svg"},56:function(e,a,t){e.exports=t.p+"static/media/pl-sql.1c56e772.svg"},57:function(e,a,t){e.exports=t.p+"static/media/db.d65ad917.jpg"},58:function(e,a,t){e.exports=t.p+"static/media/dsa.7124a443.png"},59:function(e,a,t){e.exports=t.p+"static/media/mongodb.92a21931.svg"},66:function(e,a,t){e.exports=t(92)},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},79:function(e,a,t){},82:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),c=t.n(r),s=(t(71),t(72),t(64)),i=(t(73),t(96)),m=t(95),o=t(14),u=t.n(o),p=function(){var e=function(e){c(e.target.id)},a=Object(n.useState)("homeNav"),t=Object(s.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){window.onscroll=function(){var e=u()(window).scrollTop()+1+u()(window).height()/2,a=u()("#work").offset().top,t=u()("#education").offset().top,n=u()("#projects").offset().top,l=u()("#skills").offset().top;console.log(e,a),e>=l?c("skillsNav"):e>=n?c("projectsNav"):e>=t?c("educationNav"):e>=a?c("workNav"):e<a&&c("homeNav")}}),[]),l.a.createElement("div",null,l.a.createElement(i.a,{fixed:"top",className:"component"},l.a.createElement("ul",{className:"navContainer"},l.a.createElement("li",null,l.a.createElement(m.a.Link,{href:"#home",id:"homeNav",onClick:e,className:"homeNav"===r?"activeLink":null},"Home")),l.a.createElement("li",null,l.a.createElement(m.a.Link,{href:"#work",id:"workNav",onClick:e,className:"workNav"===r?"activeLink":null},"Work Experience")),l.a.createElement("li",null,l.a.createElement(m.a.Link,{href:"#education",id:"educationNav",onClick:e,className:"educationNav"===r?"activeLink":null},"Education")),l.a.createElement("li",null,l.a.createElement(m.a.Link,{href:"#projects",id:"projectsNav",onClick:e,className:"projectsNav"===r?"activeLink":null},"Projects")),l.a.createElement("li",null,l.a.createElement(m.a.Link,{href:"#skills",id:"skillsNav",onClick:e,className:"skillsNav"===r?"activeLink":null},"Skills")))))},d=t(26),E=t(41),g=t.n(E),f=t(42),N=t.n(f),v=(t(79),t(24)),k=t(15);function h(){var e=Object(v.a)(["\n  position: relative;\n  z-index: 1;\n  bottom: 1.6em;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  background-color: transparent;\n  font-weight: bold;\n  text-shadow: 1px 1px #45a29e;\n  color: #fff;\n\n  .turn {\n    cursor: pointer;\n    transform: rotate(90deg);\n  }\n"]);return h=function(){return e},e}var b=k.b.div(h()),x=function(){return l.a.createElement(b,null,l.a.createElement("div",{className:"turn"},l.a.createElement("span",null," > ")))},S=function(){return l.a.createElement("div",{id:"home"},l.a.createElement(d.a,{controls:!1,indicators:!0,interval:2500},l.a.createElement(d.a.Item,null,l.a.createElement("img",{className:"d-block w-100 custom-img",src:g.a,alt:"First slide"})),l.a.createElement(d.a.Item,null,l.a.createElement("img",{className:"d-block w-100 custom-img",src:N.a,alt:"Second slide"}))),l.a.createElement(x,null))},w=t(47),j=t.n(w);function y(){var e=Object(v.a)(["\n  position: absolute;\n  width: 100%;\n  top: 22rem;\n  z-index: 1;\n  margin-top: -125px;\n  text-align: center;\n\n  strong {\n    font-size: 1.25em;\n  }\n  div {\n    color: ",";\n\n    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);\n    font-weight: 100;\n    letter-spacing: 7px;\n\n    .main {\n      font-size: 50px;\n    }\n\n    .sub {\n      font-size: 27px;\n      letter-spacing: 2px;\n    }\n  }\n"]);return y=function(){return e},e}var A=k.b.h1(y(),(function(e){return e.theme.textColor})),C=function(){return l.a.createElement(A,null,l.a.createElement("div",{className:"titleMessage"},l.a.createElement("div",{className:"heading"},l.a.createElement("div",{className:"main text-center mb-3"},"Hi, I am",l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("strong",null,"Rachit Chaudhary")),l.a.createElement(j.a,{options:{strings:["Software","Developer"],autoStart:!0,loop:!0}})))))},T=(t(28),function(){return l.a.createElement("div",{id:"work"},l.a.createElement("center",{className:"heading"},"About"),l.a.createElement("table",{className:"resume"},l.a.createElement("tr",null,l.a.createElement("td",{className:"lcol"},l.a.createElement("p",null,l.a.createElement("br",null),l.a.createElement("br",null),"Work Experience")),l.a.createElement("td",{className:"rcol"},l.a.createElement("br",null),l.a.createElement("span",null,"Amdocs/ Software Engineering Associate",l.a.createElement("span",{className:"year"},"08/2020 - Present"),l.a.createElement("br",null),l.a.createElement("span",{className:"degreeName"},l.a.createElement("ul",null,l.a.createElement("li",null,"Working as a Backend Developer in Product Customization Team"),l.a.createElement("li",null,"Designed and implemented multiple Restful Web Services"),l.a.createElement("li",null,"Contributed in development of a Java Application that automates Metadata modelling leading to reduction of Developer's working time by 90%"),l.a.createElement("li",null,"Wrote PL/SQL scripts for the product"),l.a.createElement("li",null,"Tech Stack: Java, SpringBoot, Oracle DB, PL/SQL, Maven, Perforce")))),l.a.createElement("span",null,"Airtel/ Software Developer Intern",l.a.createElement("span",{className:"year"},"01/2020 - 06/2020"),l.a.createElement("br",null),l.a.createElement("span",{className:"degreeName"},l.a.createElement("ul",null,l.a.createElement("li",null,"Worked as a Software Development Intern in a project to revamp company's billing system"),l.a.createElement("li",null,"Tech Stack: Java, SQL")))),l.a.createElement("span",null,"FIS Global/ Business analyst Intern",l.a.createElement("span",{className:"year"},"06/2018 - 07/2018"),l.a.createElement("br",null),l.a.createElement("span",{className:"degreeName"},l.a.createElement("ul",null,l.a.createElement("li",null,"Conducted a research on the products offered by competitors viz-a-viz company's newly launched products and created a comparitive analysis")))),l.a.createElement("hr",null)))))}),L=t(27),P=t(60),D=t(63),B=t(61),J=t(62),M=t(48),I=t.n(M),z=t(49),O=t.n(z),R=t(50),W=t.n(R),H=t(51),Q=t.n(H),_=t(52),F=t.n(_),G=t(53),V=t.n(G),q=t(54),X=t.n(q),K=t(55),U=t.n(K),Y=t(56),Z=t.n(Y),$=t(57),ee=t.n($),ae=t(58),te=t.n(ae),ne=t(59),le=t.n(ne),re=[{link:"https://www.java.com/en/",imgAltText:"JAVA",imgSrc:W.a,skillName:"JAVA"},{link:"https://isocpp.org/",imgAltText:"C++",imgSrc:Q.a,skillName:"C++"},{link:"https://spring.io/projects/spring-boot",imgAltText:"SpringBoot",imgSrc:F.a,skillName:"SpringBoot"},{link:"https://nodejs.org/en/",imgAltText:"NodeJS",imgSrc:V.a,skillName:"NodeJS"},{link:"https://expressjs.com/",imgAltText:"ExpressJS",imgSrc:X.a,skillName:"ExpressJS"},{link:"https://reactjs.org/",imgAltText:"ReactJS",imgSrc:U.a,skillName:"ReactJS"},{link:"https://html.com/",imgAltText:"HTML",imgSrc:I.a,skillName:"HTML"},{link:"https://www.w3schools.com/css/css_intro.asp",imgAltText:"CSS",imgSrc:O.a,skillName:"CSS"},{link:"https://www.tutorialspoint.com/data_structures_algorithms/algorithms_basics.htm",imgAltText:"DSA",imgSrc:te.a,skillName:"Data Structures and Algorithms"},{link:"https://www.tutorialspoint.com/dbms/index.htm",imgAltText:"DBMS",imgSrc:ee.a,skillName:"DBMS"},{link:"https://www.oracle.com/database/technologies/application-development-pl/sql.html",imgAltText:"PL/SQL",imgSrc:Z.a,skillName:"PL/SQL"},{link:"https://www.mongodb.com/",imgAltText:"MongoDB",imgSrc:le.a,skillName:"MongoDB"}],ce=(t(82),function(){return l.a.createElement("div",{className:"skillsContainer",id:"skills"},l.a.createElement("h1",{className:"heading"},"Skills"),l.a.createElement(P.a,{className:"cardContainer"},l.a.createElement(B.a,{className:"d-flex justify-content-around"},re.map((function(e,a){return l.a.createElement(J.a,{md:4},l.a.createElement(L.a,{className:"focus  mt-2 mb-2"},l.a.createElement(L.a.Body,null,l.a.createElement(L.a.Text,null,l.a.createElement("span",{key:a},l.a.createElement("a",{className:"text-dark text-decoration-none",href:e.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(D.a,{src:e.imgSrc,alt:e.imgAltText,rounded:!0,className:"image-style m-1"})," ",e.skillName))))))})))))}),se=function(){return l.a.createElement("div",{id:"projects"},l.a.createElement("table",{className:"resume"},l.a.createElement("td",{className:"lcol"},"Projects"),l.a.createElement("td",{className:"rcol"},l.a.createElement("p",null,"Underwater Surveillance System",l.a.createElement("span",{className:"year"},"01/2019 - 12/2019"),l.a.createElement("br",null),l.a.createElement("span",{className:"degreeName"},"Developed an underwater drone that will be used for terrain mapping and surveillance")),l.a.createElement("p",null,"Facial Recognition",l.a.createElement("span",{className:"year"},"03/2019 - 04/2019"),l.a.createElement("br",null),l.a.createElement("span",{className:"degreeName"},"Prepared a project using KNN algorithm to predict the names of the people in an image")),l.a.createElement("p",null,"Road Transport Optimization",l.a.createElement("span",{className:"year"},"08/2018 - 12/2018"),l.a.createElement("br",null),l.a.createElement("span",{className:"degreeName"},"Developed a project using Dijkastra algorithm to find the optimal route between two cities of Punjab")))))},ie=t(31),me=function(){return l.a.createElement("div",{id:"education"},l.a.createElement("table",{className:"resume"},l.a.createElement("tr",null,l.a.createElement("td",{className:"lcol"},"Education"),l.a.createElement("td",{className:"rcol"},l.a.createElement("p",null,"Thapar Institue Of Engineering and Technology, Patiala",l.a.createElement("span",{className:"year"},"2016-2020"),l.a.createElement("br",null),l.a.createElement("span",{className:"degreeName"},"B.E. in Electronics and Computers Engineering"),l.a.createElement("span",{className:"degreeMarks"},"CGPA: 7.05")),l.a.createElement("p",null,"V.H.R.S.S.S., Patiala",l.a.createElement("span",{className:"year"},"2016"),l.a.createElement("br",null),l.a.createElement("span",{className:"degreeName"},"class XII from P.S.E.B."),l.a.createElement("span",{className:"degreeMarks"},"85.3%")),l.a.createElement("p",null,"B.D.P.S., Patiala",l.a.createElement("span",{className:"year"},"2014"),l.a.createElement("br",null),l.a.createElement("span",{className:"degreeName"},"class X from C.B.S.E."),l.a.createElement("span",{className:"degreeMarks"},"CGPA: 8.8")),l.a.createElement("hr",null)))))};var oe=function(){return l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement(S,null),l.a.createElement(ie.Fade,{duration:500},l.a.createElement(T,null)),l.a.createElement(p,null),l.a.createElement(ie.Slide,{bottom:!0,duration:700},l.a.createElement(me,null),l.a.createElement(se,null),l.a.createElement(ce,null)))};c.a.render(l.a.createElement(k.a,{theme:{primary:"#0b0c10",textColor:"#66fcf1"}},l.a.createElement(oe,null)),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.7e7735c5.chunk.js.map