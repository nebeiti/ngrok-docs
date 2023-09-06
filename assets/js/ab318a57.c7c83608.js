"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[81426],{85500:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(51163),i=(o(59496),o(49613));const a={description:"Develop and test Twilio webhooks from localhost"},r="Twilio SMS Webhooks",l={unversionedId:"integrations/twilio/webhooks",id:"integrations/twilio/webhooks",title:"Twilio SMS Webhooks",description:"Develop and test Twilio webhooks from localhost",source:"@site/docs/integrations/twilio/webhooks.md",sourceDirName:"integrations/twilio",slug:"/integrations/twilio/webhooks",permalink:"/docs/integrations/twilio/webhooks",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/twilio/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{description:"Develop and test Twilio webhooks from localhost"},sidebar:"docs",previous:{title:"Twilio",permalink:"/docs/integrations/twilio/"},next:{title:"Twitch",permalink:"/docs/integrations/twitch/"}},s={},p=[{value:"<strong>Step 1</strong>: Start your app",id:"start-your-app",level:2},{value:"<strong>Step 2</strong>: Launch ngrok",id:"start-ngrok",level:2},{value:"<strong>Step 3</strong>: Integrate Twilio SMS Webhook",id:"setup-twilio",level:2},{value:"Run Webhooks with Twilio and ngrok",id:"run-webhooks-with-twilio-and-ngrok",level:3},{value:"Optional next steps",id:"optional",level:2},{value:"Add additional security using ngrok&#39;s signature webhook verification",id:"add-additional-security-using-ngroks-signature-webhook-verification",level:3},{value:"Inspecting requests",id:"inspecting-requests",level:3},{value:"Replaying requests",id:"replaying-requests",level:3}],u={toc:p},h="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"twilio-sms-webhooks"},"Twilio SMS Webhooks"),(0,i.kt)("hr",null),(0,i.kt)("admonition",{title:"TL;DR",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To integrate Twilio webhooks with ngrok:"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#start-your-app"},"Start your local twillio webhook app.")," ",(0,i.kt)("inlineCode",{parentName:"li"},"npm start")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#start-ngrok"},"Start ngrok.")," ",(0,i.kt)("inlineCode",{parentName:"li"},"ngrok http 3000")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#setup-twilio"},"Configure Twilio with your ngrok url and start testing.")))),(0,i.kt)("p",null,"This guide covers how to use ngrok to integrate your localhost app with ",(0,i.kt)("a",{parentName:"p",href:"https://www.twilio.com/docs/usage/webhooks/sms-webhooks"},"Twilio SMS Webhooks"),". By integrating ngrok with Twilio, you can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Develop and test Twilio webhooks locally"),", eliminating the time in deploying your development code to a public environment"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Secure your app by validating Twilio webhook using ngrok"),", letting ngrok handle security leaving more time for developing what really matters"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Inspect and troubleshoot requests from Twilio")," in real-time via the inspection UI and API"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modify and Replay Twilio Webhook requests")," with a single click and without spending time reproducing events manually in Twilio")),(0,i.kt)("h2",{id:"start-your-app"},(0,i.kt)("strong",{parentName:"h2"},"Step 1"),": Start your app"),(0,i.kt)("p",null,"An example express app can be found on GitHub here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/thomas-ngrok/ngrok-example-twilio-sms-webhook"},"https://github.com/thomas-ngrok/ngrok-example-twilio-sms-webhook"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'var MessagingResponse = require("twilio").twiml.MessagingResponse;\n\n/*** POST /sms listing. ***/\nrouter.post("/", function (req, res, next) {\n    const twiml = new MessagingResponse();\n    twiml.message("The Robots are coming! Head for the hills!");\n    res.writeHead(200, { "Content-Type": "text/xml" });\n    res.end(twiml.toString());\n});\n')),(0,i.kt)("p",null,"Start your app on port 3000. You can validate it is up and running by visiting ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"."),(0,i.kt)("p",null,"The part we are going to focus on is http://localhost:3000/sms found under /routes/sms.js in the Express example code."),(0,i.kt)("p",null,"More information on using Twilio webhooks can be found here: ",(0,i.kt)("a",{parentName:"p",href:"https://www.twilio.com/blog/parsing-an-incoming-twilio-sms-webhook-with-node-js"},"https://www.twilio.com/blog/parsing-an-incoming-twilio-sms-webhook-with-node-js")),(0,i.kt)("h2",{id:"start-ngrok"},(0,i.kt)("strong",{parentName:"h2"},"Step 2"),": Launch ngrok"),(0,i.kt)("p",null,"Once your app is running successfully on localhost, let's get it on the internet securely using ngrok!"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you're not an ngrok user yet, just ",(0,i.kt)("a",{parentName:"p",href:"https://ngrok.com/signup"},"sign up to ngrok for free"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"Download the ngrok agent"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com"},"ngrok dashboard")," and copy your Authtoken. ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Tip:")," The ngrok agent uses the authtoken to log into your account when you start a tunnel.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start ngrok by running the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"ngrok will display a url where your example applicaiton is exposed to the internet (copy this URL for use with Twilio).\n",(0,i.kt)("img",{alt:"ngrok agent running",src:o(87164).Z,width:"1960",height:"1204"})))),(0,i.kt)("h2",{id:"setup-twilio"},(0,i.kt)("strong",{parentName:"h2"},"Step 3"),": Integrate Twilio SMS Webhook"),(0,i.kt)("p",null,"Now that you have your local environment on the internet, let's configure Twilio to call your code."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sign in to your Twilio account."),(0,i.kt)("li",{parentName:"ol"},"From the Twilio Console, go to ",(0,i.kt)("strong",{parentName:"li"},"Develop")," > ",(0,i.kt)("strong",{parentName:"li"},"# Phone Numbers")," > ",(0,i.kt)("strong",{parentName:"li"},"Manage")," > ",(0,i.kt)("strong",{parentName:"li"},"Active Numbers")," and select a number to add a webhook to."),(0,i.kt)("li",{parentName:"ol"},"At the bottom of the page, under Messaging, (1) add your ngrok url (don't forget to append /sms) under Webhook and (2) change the type to HTTP Post.\n",(0,i.kt)("img",{alt:"Twilio SMS Webhook Config Screen",src:o(96315).Z,width:"2562",height:"1298"})),(0,i.kt)("li",{parentName:"ol"},"Save the phone number configuration.")),(0,i.kt)("p",null,"Congrats, everything is configured! Now it's time to test."),(0,i.kt)("h3",{id:"run-webhooks-with-twilio-and-ngrok"},"Run Webhooks with Twilio and ngrok"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Send an SMS message to your Twilio Phone number that was configured in the steps above."),(0,i.kt)("li",{parentName:"ol"},"Get excited (and maybe a little scared) when you get a text back saying, ",(0,i.kt)("strong",{parentName:"li"},'"The Robots are coming! Head for the hills!"'))),(0,i.kt)("p",null,"Congrats! You got an end-to-end example working but there's even more you can do with ngrok that will make development even easier. Check out how to inspect and replay your requests without having to send an SMS. Trust me, you won't regret it."),(0,i.kt)("h2",{id:"optional"},"Optional next steps"),(0,i.kt)("h3",{id:"add-additional-security-using-ngroks-signature-webhook-verification"},"Add additional security using ngrok's signature webhook verification"),(0,i.kt)("p",null,"The webhook verification module allows ngrok to assert requests to your endpoint originate from Twillio. This is a quick step to add extra protection to your setup."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Login to ",(0,i.kt)("a",{parentName:"li",href:"https://console.twilio.com/"},"Twilio Console")," and copy your Auth Token value.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"li"},"Note:")," ngrok Webhook Verification ensures traffic from your Twilio account is the ",(0,i.kt)("strong",{parentName:"li"},"only traffic allowed")," to make calls to your app. Because Twilio signs all Webhooks using the Primary Auth Token, ngrok can verifies the signature of every request and only authorizing requests originating from your Twilio account."),(0,i.kt)("li",{parentName:"ol"},"Restart ngrok by running the command, replacing {your auth token} with your Twilio Auth Token:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000 --verify-webhook twilio --verify-webhook-secret {your auth token}\n")))),(0,i.kt)("h3",{id:"inspecting-requests"},"Inspecting requests"),(0,i.kt)("p",null,"When you launch ngrok, you can see two links: One for the tunnel to your app (it ends up with an ngrok domain unless you're using custom domains) and a local URL (http://localhost:4040) for the Request Inspector."),(0,i.kt)("p",null,"The Request Inspector shows all the requests made through your tunnel. When you click a request, you can see details of both requests and responses."),(0,i.kt)("p",null,"Seeing requests are an excellent way for validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect."),(0,i.kt)("p",null,"To inspect the Twilio SMS Webhook request, launch the ngrok inspection interface (",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4040"),"), and then click the request sent by Twilio."),(0,i.kt)("p",null,"From the results, review the response body, header, and other details:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ngrok agent introspection",src:o(20644).Z,width:"2938",height:"2212"})),(0,i.kt)("h3",{id:"replaying-requests"},"Replaying requests"),(0,i.kt)("p",null,"The ngrok inspection interface provides a replay function that you can use to test your code without having to send an SMS to your Twilio number andthen waiting for Twilio to call your Webhook. You can even modify the replays to change the message to whatever message you are expecting."),(0,i.kt)("p",null,"To replay your call:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the ngrok inspection interface (",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:4040"),"), select an Webhook Call from Twilio."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Replay")," > ",(0,i.kt)("strong",{parentName:"li"},"Replay with modifications:")),(0,i.kt)("li",{parentName:"ol"},"Optionally, modify the request body with a different content. For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"Body=Hello+from+the+replay+at+ngrok%21")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Replay"),"."),(0,i.kt)("li",{parentName:"ol"},"Your local application receives the modified request to process and provide a response.")))}k.isMDXComponent=!0},96315:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/add_ngrok_url_to_Twilio-445576fa14a2b6f009ad50816b6fae11.png"},87164:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/launch_ngrok_tunnel-6d1e2f923f29633ab9df8e80bd6424e0.png"},20644:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ngrok_introspection_twilio_sms_webhooks-bfef6ece535eec27dce4ea371e6be443.png"}}]);