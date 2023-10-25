import{_ as e,o as l,c as t,Q as o}from"./chunks/framework.ffb2c379.js";const b=JSON.parse('{"title":"xShell","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/webconsole/xshell.md","filePath":"guide/webconsole/xshell.md","lastUpdated":null}'),i={name:"guide/webconsole/xshell.md"},s=o('<h1 id="xshell" tabindex="-1">xShell <a class="header-anchor" href="#xshell" aria-label="Permalink to &quot;xShell&quot;">​</a></h1><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><p>基于websocket的 Shell ，无需上位机！</p><p>增强了rp2040 SDK <code>stdio</code> driver:<code>puts</code>,<code>getc</code>,<code>printf</code>... 对 stdout的输出会同时转发到uart0 和 websocket(如果已经建立链接)。</p><ul><li>完全可替代uart0的shell</li><li>无需连线PicoXTools的uart0，通过websocket(over usb)进行数据交互</li></ul><p>xShell是标准的vt100终端较高的兼容性,支持通过ANSI转义码来设置颜色。</p><div class="info custom-block"><p class="custom-block-title">主要特点</p><ul><li>易于扩展</li><li>命令补全</li><li>历史记录</li></ul></div><p>具有以下的主要功能：</p><div class="info custom-block"><p class="custom-block-title">主要功能。</p><ul><li>文件系统的操作。</li><li>系统管理</li><li>目标MCU烧录</li><li>C语言编译器</li><li>JavaScript解释器</li></ul></div>',9),a=[s];function c(d,r,n,u,p,h){return l(),t("div",null,a)}const m=e(i,[["render",c]]);export{b as __pageData,m as default};