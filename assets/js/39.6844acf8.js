(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{428:function(e,t,i){"use strict";i.r(t);var a=i(25),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"fixing-imei-manual"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fixing-imei-manual"}},[e._v("#")]),e._v(" Fixing IMEI: Manual")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#finding-the-acpi-device"}},[e._v("Finding the ACPI device")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#edits-to-the-sample-ssdt"}},[e._v("Edits to the sample SSDT")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#compiling-the-ssdt"}},[e._v("Compiling the SSDT")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#wrapping-up"}},[e._v("Wrapping up")])])]),e._v(" "),i("h2",{attrs:{id:"finding-the-acpi-device"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#finding-the-acpi-device"}},[e._v("#")]),e._v(" Finding the ACPI device")]),e._v(" "),i("p",[e._v("Finding the ACPI pathing is quite easy actually, first open your decompiled DSDT you got from "),i("RouterLink",{attrs:{to:"/Manual/dump.html"}},[e._v("Dumping the DSDT")]),e._v(" and "),i("RouterLink",{attrs:{to:"/Manual/compile.html"}},[e._v("Decompiling and Compiling")]),e._v(" with either maciASL(if in macOS) or any other text editor if in Windows or Linux(VSCode has an "),i("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Thog.vscode-asl",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACPI extension"),i("OutboundLink")],1),e._v(" that can also help).")],1),e._v(" "),i("p",[e._v("Next, search for the following devices:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("IMEI")])]),e._v(" "),i("li",[i("code",[e._v("HECI")])]),e._v(" "),i("li",[i("code",[e._v("MEI")])])]),e._v(" "),i("p",[e._v("If none of the 3 show up, you'll need to create an SSDT-IMEI.")]),e._v(" "),i("p",[i("strong",[e._v("If one of these 3 devices show up")]),e._v(", you do not need SSDT-IMEI! You can simply skip this page.")]),e._v(" "),i("p",[e._v("The rest of this page will however assume none of those 3 devices showed up.")]),e._v(" "),i("h2",{attrs:{id:"compiling-the-ssdt"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#compiling-the-ssdt"}},[e._v("#")]),e._v(" Compiling the SSDT")]),e._v(" "),i("p",[e._v("So there's actually no edits required to SSDT-IMEI, you can either grab the source code and compile yourself or use the prebuilt")]),e._v(" "),i("ul",[i("li",[i("p",[i("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-IMEI-S.aml",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prebuilt SSDT-IMEI"),i("OutboundLink")],1)])]),e._v(" "),i("li",[i("p",[i("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-IMEI.dsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-IMEI's source code"),i("OutboundLink")],1)])])]),e._v(" "),i("p",[e._v("With the SSDT done, you're now "),i("RouterLink",{attrs:{to:"/Manual/compile.html"}},[e._v("ready to compile the SSDT!")])],1),e._v(" "),i("h2",{attrs:{id:"wrapping-up"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#wrapping-up"}},[e._v("#")]),e._v(" Wrapping up")]),e._v(" "),i("p",[e._v("Once you're done making your SSDT, either head to the next page to finish the rest of the SSDTs or head here if you're ready to wrap up:")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/cleanup.html"}},[i("strong",[e._v("Cleanup")])])],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);