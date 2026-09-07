import {
    Globe,
    Bot,
    Database,
    MessageCircle,
} from "lucide-react";

export const automations = [

{

id:"lead",

title:"Captação de Leads",

flow:[

"Website",

"OpenAI",

"CRM",

"WhatsApp"

],

icon:Globe

},

{

id:"invoice",

title:"Notas Fiscais",

flow:[

"ERP",

"Financeiro",

"Google Drive"

],

icon:Database

},

{

id:"support",

title:"Suporte Inteligente",

flow:[

"Chat",

"IA",

"Discord"

],

icon:Bot

}

];