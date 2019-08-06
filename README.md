# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When the Techtonic hyperlink is clicked the browser checks the Domain Name System(DNS) for the corresponding name and after finding the DNS record it uses the IP address that corresponds with the domain name which may either be found in the browser cache or up to the ISP cache or on DNS servers. After the correct IP address is found the browser will create a connection between itself and the server that contains the IP address and will initiate a TCP/IP connection for data transfer. After a connection is established the browser will send an HTTP request for information to the server. The server will then check the request for information and send out the HTTP response which will contain the webpage that was being requested along with any specific cookies. The browser will then receive the webpage information from the server and proceed to process the information and render the webpage on the user's browser.

## From start to finish, how does data reach you to be rendered in the browser?

After a browser requests a webpage computer receives packets of the relevant information needed to render the browser. The data is then converted to into a form that the browser can understand.  The data is first converted into characters (HTML) then converted into tokens which help structure the characters. These tokens are then converted into nodes which then are converted into a data structure called a linked tree of DOM which establishes parent-child relationships. This process is also repeated if there are CSS elements which establish their own DOM structure. After both structures are rendered they go to a 'render tree' process that creates the layout for the browser and then are 'painted' using rendering blocks which show up as the browser.  https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10/

## What code is rendered in the browser?

The browser takes HTML, CSS, and/or Javascript code that code then is converted and parsed into a render tree that creates the objects and 'art' that then allows the browser to render content.

## What is the server-side code’s main function?

Server-side code's main function is to interact with databases or files and to process user input. Also allows users to receive information based on what they are looking for or to give customers suggestions based on their search history.

## What is the client-side code’s main function?

Client-side code's main function is to display to the user through the web browser the content that the user is requesting.

## What is runtime?

Run time is the set of instructions/code that is executed by the software when it is running.  https://blog.stackpath.com/runtime/

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

All instances of client-side assets are created because when a webpage is loaded the browser runs the scripting languages which contain images HTML etc which allows faster loading times and less time with the server. https://www.seguetech.com/client-server-side-code/


## How many instances of the server-side code are available at any given time?

At any given time, there is only one instance of server-side code as the browser loads all information at once then sends that information to be rendered.

## How many instances of the databases connected to the server application are created?

At any one time, a database is only connected once to a server application. This allows for each request to be processed in order by both the server and the database until the request for the information is finished.  https://en.wikipedia.org/wiki/Client%E2%80%93server_model
