(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{471:function(e,a,s){"use strict";s.r(a);var t=s(45),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"rs232-gateway"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rs232-gateway"}},[e._v("#")]),e._v(" RS232 gateway")]),e._v(" "),s("h2",{attrs:{id:"sending-an-rs232-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sending-an-rs232-message"}},[e._v("#")]),e._v(" Sending an RS232 message")]),e._v(" "),s("p",[e._v("Simply publish the message you wish to transmit, minus the prefix and postfix. For example, to send the \"Turn On\" signal for a Mitsubishi XD221U projector, the code is simply '!' so you would use the command")]),e._v(" "),s("p",[s("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoRS232 -m \'{"value": "!"}\'')])]),e._v(" "),s("p",[e._v("It will automatically add the prefix and postfix you set in "),s("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/master/main/config_RS232.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("config_RS232.h"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"receiving-an-rs232-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receiving-an-rs232-message"}},[e._v("#")]),e._v(" Receiving an RS232 message")]),e._v(" "),s("p",[e._v("To receive a message, subscribe to all with "),s("code",[e._v("mosquitto_sub -t +/# -v")]),e._v('\nand perform an action that should get a response from the device. For example, If I were to send the "Turn On" signal from earlier, I would receive back')]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[e._v("home/OpenMQTTGateway/RS232toMQTT "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Because this projector echoes back a received command to acknowledge. Some devices will send a NACK, or Negative Acknowledge, to confirm that they received your message but could not comply. That would look like")]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[e._v("home/OpenMQTTGateway/RStoMQTT "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"!:N"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);