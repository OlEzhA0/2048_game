(this.webpackJsonp2048_game=this.webpackJsonp2048_game||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),i=n.n(o),c=n(7),f=n(1),l=n(2),u=n(4),s=n(3),v=(n(13),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return this.props.gameField.map((function(e){return e.map((function(e,t){return a.a.createElement("div",{className:0===e?"cell":"cell__".concat(parseFloat(e)," cell"),key:t},0===e?"":parseFloat(e))}))}))}}]),n}(a.a.PureComponent)),m=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(f.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={gameField:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],firstMove:!0,arrow:"",score:0,overGame:!1},e.checkForOverGame=function(){e.setState({overGame:!1});for(var t=e.state.gameField,n=0;n<t;n++)for(var r=0;r<t[n];r++)if(0===t[n][r])return;e.canMoveDown(!0)||(e.canMoveUp(!0)||e.canMoveLeft(!0)||e.canMoveRight(!0)||e.setState({overGame:!0}))},e.newItemPosition=function(){e.setState({firstMove:!1});var t={x:+(3*Math.random()+0).toFixed(0),y:+(3*Math.random()+0).toFixed(0)};0===e.state.gameField[t.x][t.y]?e.newItem(t.x,t.y):e.newItemPosition(),e.checkForOverGame()},e.newItem=function(t,n){var r=(14*Math.random()+0).toFixed(0),a=Object(c.a)(e.state.gameField);a[t][n]=[2,4,2,2,4,2,2,2,2,2,2,2,2,8,2][r],e.setState((function(){return{gameField:a}})),e.checkForOverGame()},e.canMoveRight=function(t){for(var n=e.state.gameField,r=!1,a=0;a<n.length;a++)for(var o=0;o<n[a].length;o++)if(0!==n[a][o])for(var i=o+1;i<n[a].length;i++)if(0===n[a][i]){r=!0;break}for(var c=0;c<n.length;c++)for(var f=n[c].length;f>=0;f--)if(f-1>=0&&0!==n[c][f]&&n[c][f]===n[c][f-1]){r=!0;break}if(t)return console.log("can move right",r),r;r&&!t&&e.rightDirection()},e.rightDirection=function(){for(var t=e.state.gameField,n=[],r=[],a=0;a<t.length;a++){for(var o=[],i=0;i<t[a].length;i++)0===t[a][i]?o.unshift(t[a][i]):o.push(t[a][i]);r.push(o)}for(var c=0;c<r.length;c++){for(var f=[],l=3,u=r[c].length-1;u>=0;u--){if(u-1>=0&&r[c][u]===r[c][u-1])if("continue"===function(){var t=2*r[c][u];return e.setState((function(e){return{score:e.score+t}})),f[l]=t,u--,l--,"continue"}())continue;f[l]=r[c][u],l--}for(var s=0;s<f.length;s++)f[s]||(f[s]=0);n.push(f)}e.setState((function(){return{gameField:n,arrow:""}}),(function(){return e.newItemPosition()}))},e.canMoveLeft=function(t){for(var n=e.state.gameField,r=null,a=null,o=!1,i=0;i<n.length;i++){for(var c=n[i].length-1;c>=0;c--)if(0!==n[i][c]){r=i,a=c;break}if("number"===typeof r&&"number"===typeof a)for(var f=a-1;f>=0;f--)0===n[r][f]&&(o=!0)}for(var l=0;l<n.length;l++)for(var u=0;u<n[l].length;u++)u+1<n.length&&0!==n[l][u]&&n[l][u]===n[l][u+1]&&(o=!0);if(t)return o;o&&!t&&e.leftDirection()},e.leftDirection=function(){for(var t=e.state.gameField,n=[],r=[],a=0;a<t.length;a++){for(var o=[],i=t[a].length-1;i>=0;i--)0===t[a][i]?o.push(t[a][i]):o.unshift(t[a][i]);r.push(o)}for(var c=0;c<r.length;c++){for(var f=[],l=0,u=0;u<r[c].length;u++){if(u+1<r[c].length&&r[c][u]===r[c][u+1])if("continue"===function(){var t=2*r[c][u];return e.setState((function(e){return{score:e.score+t}})),f[l]=t,u++,l++,"continue"}())continue;f[l]=r[c][u],l++}for(var s=0;s<4;s++)f[s]||(f[s]=0);n.push(f)}e.setState((function(){return{gameField:n,arrow:""}}),(function(){return e.newItemPosition()}))},e.canMoveUp=function(t){for(var n=e.state.gameField,r=!1,a=n.length-1;a>=0;a--)for(var o=0;o<n[a].length;o++)if(0!==n[a][o])for(var i=a;i>=0;i--)0===n[i][o]&&(r=!0);for(var c=n.length-1;c>=0;c--)for(var f=0;f<n[c].length;f++)c-1>=0&&0!==n[c][f]&&n[c][f]===n[c-1][f]&&(r=!0);if(t)return r;r&&!t&&e.upDirection()},e.upDirection=function(){for(var t=e.state.gameField,n=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],r=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],a=0,o=0;o<t.length;o++)for(var i=0;i<t[o].length;i++){var c=!1;if(0!==t[o][i])for(;!c;)0===n[a][i]?(n[a][i]=t[o][i],a=0,c=!0):a++}for(var f=0;f<=3;){for(var l=0;l<n.length;l++){if(l+1<n.length&&n[l][f]===n[l+1][f]&&n[l][f])if("continue"===function(){var t=2*n[l][f];e.setState((function(e){return{score:e.score+t}})),l++;for(var a=!1,o=0;!a;)0===r[o][f]?(r[o][f]=t,a=!0):o++;return"continue"}())continue;if(0!==n[l][f])for(var u=!1,s=0;!u;)0===r[s][f]?(r[s][f]=n[l][f],u=!0):s++}f++}e.setState((function(){return{gameField:r,arrow:""}}),(function(){return e.newItemPosition()}))},e.canMoveDown=function(t){for(var n=e.state.gameField,r=!1,a=0;a<n.length;a++)for(var o=0;o<n[a].length;o++)if(0!==n[a][o])for(var i=a;i<n.length;i++)0===n[i][o]&&(r=!0);for(var c=0;c<n.length;c++)for(var f=0;f<n[c].length;f++)c+1<n.length&&0!==n[c][f]&&n[c][f]===n[c+1][f]&&(r=!0);if(t)return r;r&&!t&&e.downDirection()},e.downDirection=function(){for(var t=e.state.gameField,n=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],r=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],a=3,o=t.length-1;o>=0;o--)for(var i=0;i<t[o].length;i++){var c=!1;if(0!==t[o][i])for(;!c;)0===n[a][i]?(n[a][i]=t[o][i],a=3,c=!0):a--}for(var f=0;f<=3;){for(var l=n.length-1;l>=0;l--){if(l-1>=0&&n[l][f]===n[l-1][f]&&n[l][f])if("continue"===function(){var t=2*n[l][f];e.setState((function(e){return{score:e.score+t}})),l--;for(var a=!1,o=3;!a;)0===r[o][f]?(r[o][f]=t,a=!0):o--;return"continue"}())continue;if(0!==n[l][f])for(var u=!1,s=3;!u;)0===r[s][f]?(r[s][f]=n[l][f],u=!0):s--}f++}e.setState((function(){return{gameField:r,arrow:""}}),(function(){return e.newItemPosition()}))},e.chooseDirection=function(t){switch(t){case"right":e.canMoveRight();break;case"left":e.canMoveLeft();break;case"up":e.canMoveUp();break;case"down":e.canMoveDown()}},e.reset=function(){e.setState((function(){return{gameField:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],firstMove:!0,arrow:"",score:0,overGame:!1}}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.documentElement.addEventListener("keydown",(function(t){var n="";"ArrowRight"===t.key?n="right":"ArrowLeft"===t.key?n="left":"ArrowUp"===t.key?n="up":"ArrowDown"===t.key&&(n="down"),e.setState({arrow:n})}))}},{key:"render",value:function(){var e=this.state,t=e.gameField,n=e.firstMove,r=e.arrow,o=e.score,i=e.overGame;return n&&this.newItemPosition(),r&&!i&&this.chooseDirection(r),console.log("overgame",i),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"container"},a.a.createElement("button",{onClick:this.reset,type:"button",className:"newGame"},"New Game"),a.a.createElement("h1",{className:"score"},"Score ",a.a.createElement("br",null),a.a.createElement("span",{className:"currentScore"},o))),a.a.createElement("div",{className:"field",style:i?{zIndex:"-2"}:{zIndex:"0"}},a.a.createElement(v,{gameField:t})),a.a.createElement("div",{className:"gameOverDiv",style:i?{zIndex:"2",display:"block"}:{zIndex:"-2",display:"none"}},a.a.createElement("p",{className:"gameOverText"},"Game over!"),a.a.createElement("p",{className:"gameOverScore"},"Your score: ",o),a.a.createElement("p",{className:"hint"},"Click 'New Game' for start \u2191")))}}]),n}(a.a.Component);i.a.render(a.a.createElement(m,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.2da3a8c7.chunk.js.map