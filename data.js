const quizData = {
    // HTML Quiz Data
     htmlQuizData : {
        easy: [
          {
            question: "What does HTML stand for?",
            options: [
              "Hyper Text Markup Language",
              "High Text Machine Language",
              "Hyperlink Markup Language",
              "None of the above",
            ],
            correctAnswer: "Hyper Text Markup Language",
          },
          {
            question: "Which HTML tag is used to display the largest heading?",
            options: ["<h6>", "<h1>", "<head>", "<heading>"],
            correctAnswer: "<h1>",
          },
          {
            question: "Which HTML tag is used to define a paragraph?",
            options: ["<paragraph>", "<p>", "<para>", "<pg>"],
            correctAnswer: "<p>",
          },
          {
            question: "Which tag is used to create a hyperlink?",
            options: ["<a>", "<link>", "<href>", "<url>"],
            correctAnswer: "<a>",
          },
          {
            question: "Which HTML element is used to display a numbered list?",
            options: ["<ol>", "<ul>", "<li>", "<list>"],
            correctAnswer: "<ol>",
          },
          {
            question: "What is the correct HTML tag for inserting a line break?",
            options: ["<break>", "<lb>", "<br>", "<newline>"],
            correctAnswer: "<br>",
          },
          {
            question: "What is the correct way to create an email link in HTML?",
            options: [
              "<a href='mailto:example@example.com'>",
              "<a href='email:example@example.com'>",
              "<a href='send:example@example.com'>",
              "<email='example@example.com'>",
            ],
            correctAnswer: "<a href='mailto:example@example.com'>",
          },
          {
            question: "Which attribute specifies alternative text for an image?",
            options: ["alt", "src", "href", "title"],
            correctAnswer: "alt",
          },
          {
            question: "What is the purpose of the `<title>` element?",
            options: [
              "To define the main heading of the document",
              "To define the title displayed on the browser tab",
              "To specify the website logo",
              "To create a hyperlink",
            ],
            correctAnswer: "To define the title displayed on the browser tab",
          },
          {
            question: "Which tag is used to create a list item?",
            options: ["<item>", "<li>", "<list>", "<ul>"],
            correctAnswer: "<li>",
          },
        ],
        medium: [
          {
            question: "Which tag is used to define an input field in a form?",
            options: ["<form>", "<input>", "<text>", "<field>"],
            correctAnswer: "<input>",
          },
          {
            question: "What does the 'src' attribute in the <img> tag specify?",
            options: [
              "The size of the image",
              "The source file of the image",
              "The alternative text for the image",
              "The alignment of the image",
            ],
            correctAnswer: "The source file of the image",
          },
          {
            question: "Which HTML element is used to define metadata about the document?",
            options: ["<meta>", "<link>", "<script>", "<style>"],
            correctAnswer: "<meta>",
          },
          {
            question: "Which attribute is used to uniquely identify an HTML element?",
            options: ["class", "id", "name", "style"],
            correctAnswer: "id",
          },
          {
            question: "What is the correct way to specify a background color in HTML?",
            options: [
              "<body color='blue'>",
              "<body style='background-color: blue;'>",
              "<background color='blue'>",
              "<bg color='blue'>",
            ],
            correctAnswer: "<body style='background-color: blue;'>",
          },
          {
            question: "Which tag is used to define a dropdown list in HTML?",
            options: ["<list>", "<select>", "<dropdown>", "<menu>"],
            correctAnswer: "<select>",
          },
          {
            question: "What is the purpose of the `<thead>` element in a table?",
            options: [
              "To define the main content of the table",
              "To group the header content of the table",
              "To define the footer of the table",
              "To create a row in the table",
            ],
            correctAnswer: "To group the header content of the table",
          },
          {
            question: "What does the `<canvas>` element do in HTML?",
            options: [
              "Defines a drawing area for graphics",
              "Creates a container for text",
              "Embeds a video",
              "Defines a table layout",
            ],
            correctAnswer: "Defines a drawing area for graphics",
          },
          {
            question: "Which attribute is used to open a link in a new tab?",
            options: ["href", "target='_blank'", "rel='new'", "type='newtab'"],
            correctAnswer: "target='_blank'",
          },
          {
            question: "Which HTML element is used to embed a video?",
            options: ["<video>", "<embed>", "<movie>", "<media>"],
            correctAnswer: "<video>",
          },
        ],
        hard: [
          {
            question: "What is the purpose of the `<section>` element?",
            options: [
              "To define a section in the document",
              "To define the header of the document",
              "To define a navigation link",
              "To create a footer for the document",
            ],
            correctAnswer: "To define a section in the document",
          },
          {
            question: "Which HTML attribute specifies the character encoding?",
            options: ["charset", "encoding", "lang", "meta"],
            correctAnswer: "charset",
          },
          {
            question: "Which element is used to group related options in a dropdown list?",
            options: ["<option>", "<group>", "<optgroup>", "<fieldset>"],
            correctAnswer: "<optgroup>",
          },
          {
            question: "What does the `<noscript>` tag do?",
            options: [
              "Displays alternate content if JavaScript is disabled",
              "Disables the browser's default scripts",
              "Runs a fallback script",
              "Defines a section for additional scripts",
            ],
            correctAnswer: "Displays alternate content if JavaScript is disabled",
          },
          {
            question: "Which attribute is used for inline styles in HTML?",
            options: ["class", "id", "style", "css"],
            correctAnswer: "style",
          },
          {
            question: "What is the purpose of the `<base>` tag?",
            options: [
              "To set the base URL for relative links",
              "To define a script base",
              "To group metadata",
              "To define a container",
            ],
            correctAnswer: "To set the base URL for relative links",
          },
          {
            question: "Which tag is used to define an HTML comment?",
            options: ["<!-- -->", "//", "/* */", "<comment>"],
            correctAnswer: "<!-- -->",
          },
          {
            question: "Which element is used to define a caption for a table?",
            options: ["<title>", "<caption>", "<header>", "<table-caption>"],
            correctAnswer: "<caption>",
          },
          {
            question: "What does the `<mark>` element do?",
            options: [
              "Creates highlighted text",
              "Marks important text",
              "Creates a hyperlink",
              "Defines a code snippet",
            ],
            correctAnswer: "Creates highlighted text",
          },
          {
            question: "What is the correct way to define a data table in HTML?",
            options: ["<table>", "<datagrid>", "<grid>", "<datalist>"],
            correctAnswer: "<table>",
          },
        ],
      },
      
    //   // Example: Start quiz by category
    //   function startQuiz(category) {
    //     console.log(quizData[category]); // Display selected category's questions
    //   }
      
    
    
    
    // CSS Quiz Data
     cssQuizData : {
        easy: [
          {
            question: "What does CSS stand for?",
            options: [
              "Cascading Style Sheets",
              "Colorful Style Sheets",
              "Computer Style Sheets",
              "Creative Style Sheets",
            ],
            correctAnswer: "Cascading Style Sheets",
          },
          {
            question: "Which property is used to change the background color in CSS?",
            options: ["color", "background-color", "bgcolor", "background"],
            correctAnswer: "background-color",
          },
          {
            question: "Which property is used to change the text color in CSS?",
            options: ["text-color", "font-color", "color", "foreground"],
            correctAnswer: "color",
          },
          {
            question: "How do you add a comment in CSS?",
            options: [
              "// This is a comment",
              "/* This is a comment */",
              "<!-- This is a comment -->",
              "# This is a comment",
            ],
            correctAnswer: "/* This is a comment */",
          },
          {
            question: "Which CSS property is used to change the font size?",
            options: ["font-style", "font-size", "text-size", "font-weight"],
            correctAnswer: "font-size",
          },
          {
            question: "How do you make text bold in CSS?",
            options: [
              "font-weight: bold;",
              "font-style: bold;",
              "text-decoration: bold;",
              "text-weight: bold;",
            ],
            correctAnswer: "font-weight: bold;",
          },
          {
            question: "Which property is used to set the spacing between lines of text?",
            options: ["line-spacing", "line-height", "text-spacing", "spacing"],
            correctAnswer: "line-height",
          },
          {
            question: "Which property is used to make the text italic?",
            options: ["font-weight", "font-style", "text-decoration", "font-variant"],
            correctAnswer: "font-style",
          },
          {
            question: "Which property is used to set the text alignment?",
            options: ["align", "text-align", "horizontal-align", "text-placement"],
            correctAnswer: "text-align",
          },
          {
            question: "What is the default position value in CSS?",
            options: ["relative", "absolute", "static", "fixed"],
            correctAnswer: "static",
          },
        ],
        medium: [
          {
            question: "Which property is used to create space inside an element’s border?",
            options: ["margin", "padding", "border-spacing", "spacing"],
            correctAnswer: "padding",
          },
          {
            question: "Which property controls the order of stacked elements?",
            options: ["order", "stacking", "z-index", "layer-index"],
            correctAnswer: "z-index",
          },
          {
            question: "Which CSS property is used to make the background image not repeat?",
            options: [
              "background-repeat: no;",
              "background: no-repeat;",
              "background-repeat: no-repeat;",
              "image-repeat: none;",
            ],
            correctAnswer: "background-repeat: no-repeat;",
          },
          {
            question: "Which pseudo-class is used to style a visited link?",
            options: [":link", ":visited", ":hover", ":focus"],
            correctAnswer: ":visited",
          },
          {
            question: "Which property specifies the width of a border in CSS?",
            options: ["border-width", "border-size", "border-height", "border-style"],
            correctAnswer: "border-width",
          },
          {
            question: "What is the CSS property to set rounded corners for an element?",
            options: ["border-round", "corner-radius", "border-radius", "border-curve"],
            correctAnswer: "border-radius",
          },
          {
            question: "Which property is used to set the transparency of an element?",
            options: ["opacity", "visibility", "filter", "transparent"],
            correctAnswer: "opacity",
          },
          {
            question: "Which value of the 'position' property is used to keep an element fixed on the page?",
            options: ["absolute", "relative", "static", "fixed"],
            correctAnswer: "fixed",
          },
          {
            question: "Which CSS property is used to create a shadow effect on text?",
            options: ["box-shadow", "text-shadow", "font-shadow", "shadow"],
            correctAnswer: "text-shadow",
          },
          {
            question: "Which property is used to specify the space between letters in CSS?",
            options: ["letter-spacing", "word-spacing", "line-height", "spacing"],
            correctAnswer: "letter-spacing",
          },
        ],
        hard: [
          {
            question: "Which property is used to apply a 3D transformation in CSS?",
            options: ["transform", "perspective", "translate3d", "3d-transform"],
            correctAnswer: "transform",
          },
          {
            question: "Which CSS function is used to rotate an element?",
            options: ["translate()", "skew()", "rotate()", "scale()"],
            correctAnswer: "rotate()",
          },
          {
            question: "Which property is used to change the speed of an animation?",
            options: ["animation-duration", "animation-speed", "animation-time", "transition-speed"],
            correctAnswer: "animation-duration",
          },
          {
            question: "Which property is used to add space between table cells?",
            options: ["border-spacing", "cell-spacing", "padding", "margin"],
            correctAnswer: "border-spacing",
          },
          {
            question: "Which value of 'display' makes an element a flex container?",
            options: ["block", "grid", "inline-flex", "flex"],
            correctAnswer: "flex",
          },
          {
            question: "Which shorthand property is used to define all animation properties?",
            options: ["animation-all", "animation", "transition", "animate"],
            correctAnswer: "animation",
          },
          {
            question: "Which CSS property is used to create a gradient background?",
            options: ["gradient", "background-gradient", "linear-gradient", "background"],
            correctAnswer: "background",
          },
          {
            question: "Which CSS pseudo-element is used to style the first letter of a text?",
            options: ["::first-letter", "::first-line", "::letter", "::initial"],
            correctAnswer: "::first-letter",
          },
          {
            question: "Which CSS property defines the stacking order of elements?",
            options: ["z-index", "order", "stack-index", "layer-index"],
            correctAnswer: "z-index",
          },
          {
            question: "What does the 'vh' unit represent in CSS?",
            options: [
              "Viewport height",
              "Vertical height",
              "Viewport horizontal",
              "Vertical header",
            ],
            correctAnswer: "Viewport height",
          },
        ],
      },
      
      // Example: Start quiz by category
      // function startQuiz(category) {
      //   console.log(cssQuizData[category]); // Displays selected category's questions
      // }
      
    
    
    
    
    // JavaScript Quiz Data
     jsQuizData : {
        easy: [
          {
            question: "What does 'JS' stand for in programming?",
            options: [
              "JavaSyntax",
              "JavaScript",
              "JustScript",
              "JavaSource",
            ],
            correctAnswer: "JavaScript",
          },
          {
            question: "Which tag is used to include JavaScript in an HTML document?",
            options: ["<js>", "<script>", "<javascript>", "<code>"],
            correctAnswer: "<script>",
          },
          {
            question: "Which method is used to display text in an alert box?",
            options: [
              "alert()",
              "display()",
              "popup()",
              "show()",
            ],
            correctAnswer: "alert()",
          },
          {
            question: "How do you write a single-line comment in JavaScript?",
            options: [
              "/* Comment */",
              "// Comment",
              "<!-- Comment -->",
              "# Comment",
            ],
            correctAnswer: "// Comment",
          },
          {
            question: "What is the correct syntax to declare a JavaScript variable?",
            options: [
              "let myVar;",
              "var = myVar;",
              "myVar = var;",
              "declare myVar;",
            ],
            correctAnswer: "let myVar;",
          },
          {
            question: "Which operator is used to assign a value to a variable?",
            options: ["=", "==", "===", "::"],
            correctAnswer: "=",
          },
          {
            question: "Which data type is NOT supported in JavaScript?",
            options: ["String", "Number", "Boolean", "Character"],
            correctAnswer: "Character",
          },
          {
            question: "Which method is used to write text into the browser's console?",
            options: [
              "console.write()",
              "console.log()",
              "console.output()",
              "console.display()",
            ],
            correctAnswer: "console.log()",
          },
          {
            question: "Which method is used to combine two strings in JavaScript?",
            options: ["concat()", "merge()", "combine()", "append()"],
            correctAnswer: "concat()",
          },
          {
            question: "What is the output of `typeof 'hello'`?",
            options: ["string", "text", "character", "undefined"],
            correctAnswer: "string",
          },
        ],
        medium: [
          {
            question: "What is the result of `2 + '2'` in JavaScript?",
            options: ["4", "22", "NaN", "Error"],
            correctAnswer: "22",
          },
          {
            question: "Which keyword is used to create a constant in JavaScript?",
            options: ["let", "var", "constant", "const"],
            correctAnswer: "const",
          },
          {
            question: "What will `Boolean('')` evaluate to?",
            options: ["true", "false", "undefined", "Error"],
            correctAnswer: "false",
          },
          {
            question: "Which built-in method is used to convert a string to lowercase?",
            options: ["toLowerCase()", "lower()", "stringToLower()", "toLower()"],
            correctAnswer: "toLowerCase()",
          },
          {
            question: "Which statement correctly creates a JavaScript function?",
            options: [
              "function myFunc() {}",
              "func myFunc() {}",
              "function = myFunc() {}",
              "createFunction myFunc() {}",
            ],
            correctAnswer: "function myFunc() {}",
          },
          {
            question: "Which operator is used to compare both value and type?",
            options: ["==", "===", "=", "!="],
            correctAnswer: "===",
          },
          {
            question: "What does the `push()` method do in JavaScript?",
            options: [
              "Adds an element to the end of an array",
              "Removes an element from an array",
              "Sorts an array",
              "Adds an element to the beginning of an array",
            ],
            correctAnswer: "Adds an element to the end of an array",
          },
          {
            question: "Which keyword is used to refer to the current object in JavaScript?",
            options: ["this", "self", "object", "current"],
            correctAnswer: "this",
          },
          {
            question: "What is the result of `null == undefined`?",
            options: ["true", "false", "Error", "NaN"],
            correctAnswer: "true",
          },
          {
            question: "What is the purpose of the `isNaN()` function?",
            options: [
              "To check if a value is a number",
              "To check if a value is NaN",
              "To convert a value to NaN",
              "To check if a value is not a number",
            ],
            correctAnswer: "To check if a value is not a number",
          },
        ],
        hard: [
          {
            question: "What will the following code output? `console.log(0.1 + 0.2 === 0.3);`",
            options: ["true", "false", "undefined", "NaN"],
            correctAnswer: "false",
          },
          {
            question: "Which method is used to filter elements of an array?",
            options: ["filter()", "find()", "reduce()", "map()"],
            correctAnswer: "filter()",
          },
          {
            question: "What does the `call()` method do in JavaScript?",
            options: [
              "Invokes a function with a given 'this' value and arguments",
              "Creates a new function",
              "Binds a function to an object",
              "Calls a method of an object",
            ],
            correctAnswer: "Invokes a function with a given 'this' value and arguments",
          },
          {
            question: "What will `typeof NaN` return?",
            options: ["number", "NaN", "undefined", "object"],
            correctAnswer: "number",
          },
          {
            question: "Which feature is used to create an asynchronous function in JavaScript?",
            options: ["async/await", "setTimeout()", "Promise.all()", "callback()"],
            correctAnswer: "async/await",
          },
          {
            question: "What is the difference between `let` and `var`?",
            options: [
              "let is block-scoped; var is function-scoped",
              "let is function-scoped; var is block-scoped",
              "Both are block-scoped",
              "There is no difference",
            ],
            correctAnswer: "let is block-scoped; var is function-scoped",
          },
          {
            question: "Which method converts a JSON object into a string?",
            options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toString()"],
            correctAnswer: "JSON.stringify()",
          },
          {
            question: "What does the `bind()` method do?",
            options: [
              "Creates a new function with a specified 'this' value",
              "Executes a function immediately",
              "Joins two objects",
              "Filters the properties of an object",
            ],
            correctAnswer: "Creates a new function with a specified 'this' value",
          },
          {
            question: "Which JavaScript feature allows you to destructure objects and arrays?",
            options: ["Destructuring assignment", "Object slicing", "Array unpacking", "Spread syntax"],
            correctAnswer: "Destructuring assignment",
          },
          {
            question: "What does the `reduce()` method do?",
            options: [
              "Reduces an array to a single value",
              "Removes elements from an array",
              "Sorts the array",
              "Filters elements of an array",
            ],
            correctAnswer: "Reduces an array to a single value",
          },
        ],
      },
      
    //   // Example: Start quiz by category
    //   function startQuiz(category) {
    //     console.log(jsQuizData[category]); // Displays selected category's questions
    //   }
      
    
    // Python Quiz Data
     pythonQuizData : {
        easy: [
          {
            question: "What is the correct file extension for Python files?",
            options: [".py", ".python", ".pt", ".p"],
            correctAnswer: ".py",
          },
          {
            question: "Which keyword is used to define a function in Python?",
            options: ["function", "def", "fun", "define"],
            correctAnswer: "def",
          },
          {
            question: "How do you print something in Python?",
            options: ["print()", "echo()", "display()", "write()"],
            correctAnswer: "print()",
          },
          {
            question: "How do you create a single-line comment in Python?",
            options: ["// comment", "# comment", "/* comment */", "<!-- comment -->"],
            correctAnswer: "# comment",
          },
          {
            question: "Which function is used to get the length of a list in Python?",
            options: ["len()", "length()", "size()", "count()"],
            correctAnswer: "len()",
          },
          {
            question: "What is the correct way to create a list in Python?",
            options: [
              "list = []",
              "list = ()",
              "list = {}",
              "list = <>",
            ],
            correctAnswer: "list = []",
          },
          {
            question: "What is the output of `2 ** 3` in Python?",
            options: ["5", "6", "8", "9"],
            correctAnswer: "8",
          },
          {
            question: "What is the default value of the 'end' parameter in the print() function?",
            options: ["newline", "space", "comma", "semicolon"],
            correctAnswer: "newline",
          },
          {
            question: "How do you check the type of a variable in Python?",
            options: ["type()", "typeof()", "checkType()", "varType()"],
            correctAnswer: "type()",
          },
          {
            question: "Which keyword is used to create a class in Python?",
            options: ["class", "define", "object", "struct"],
            correctAnswer: "class",
          },
        ],
        medium: [
          {
            question: "Which method is used to remove whitespace from the beginning and end of a string?",
            options: ["strip()", "trim()", "cut()", "clean()"],
            correctAnswer: "strip()",
          },
          {
            question: "What is the output of `5 // 2` in Python?",
            options: ["2", "2.5", "3", "Error"],
            correctAnswer: "2",
          },
          {
            question: "How do you handle exceptions in Python?",
            options: ["try-except", "catch-try", "try-catch", "error-catch"],
            correctAnswer: "try-except",
          },
          {
            question: "Which of the following is immutable in Python?",
            options: ["List", "Set", "Tuple", "Dictionary"],
            correctAnswer: "Tuple",
          },
          {
            question: "What does `len({1, 2, 2, 3})` return?",
            options: ["3", "4", "5", "Error"],
            correctAnswer: "3",
          },
          {
            question: "What is the output of `bool([])`?",
            options: ["True", "False", "Error", "None"],
            correctAnswer: "False",
          },
          {
            question: "Which of the following is used to import a module in Python?",
            options: ["import", "include", "load", "module"],
            correctAnswer: "import",
          },
          {
            question: "How do you define an inline anonymous function in Python?",
            options: ["lambda", "anonymous", "def", "function"],
            correctAnswer: "lambda",
          },
          {
            question: "What is the output of `3 * 'abc'` in Python?",
            options: ["'abcabcabc'", "'abc3'", "['abc', 'abc', 'abc']", "Error"],
            correctAnswer: "'abcabcabc'",
          },
          {
            question: "Which method is used to sort a list in Python?",
            options: ["sort()", "sorted()", "order()", "arrange()"],
            correctAnswer: "sort()",
          },
        ],
        hard: [
          {
            question: "What will the following code output? `print(list(map(lambda x: x * 2, [1, 2, 3])))`",
            options: ["[2, 4, 6]", "[1, 2, 3]", "[1, 4, 9]", "Error"],
            correctAnswer: "[2, 4, 6]",
          },
          {
            question: "Which statement is used to stop a loop prematurely in Python?",
            options: ["break", "continue", "exit", "stop"],
            correctAnswer: "break",
          },
          {
            question: "What is a Python decorator?",
            options: [
              "A function that modifies another function",
              "A type of Python class",
              "A module in Python",
              "A loop structure",
            ],
            correctAnswer: "A function that modifies another function",
          },
          {
            question: "What will `set([1, 2, 2, 3, 3, 3])` return?",
            options: ["{1, 2, 3}", "[1, 2, 3]", "{1: 2, 2: 3}", "[1: 2, 2: 3]"],
            correctAnswer: "{1, 2, 3}",
          },
          {
            question: "Which Python module is used for regular expressions?",
            options: ["re", "regex", "match", "expression"],
            correctAnswer: "re",
          },
          {
            question: "What does the `@staticmethod` decorator do?",
            options: [
              "Defines a method that belongs to the class, not the instance",
              "Defines a method that belongs only to an instance",
              "Defines a method with private access",
              "Defines an abstract method",
            ],
            correctAnswer: "Defines a method that belongs to the class, not the instance",
          },
          {
            question: "What is the output of `bool('False')` in Python?",
            options: ["True", "False", "Error", "None"],
            correctAnswer: "True",
          },
          {
            question: "Which function is used to serialize an object in Python?",
            options: ["pickle.dump()", "json.dump()", "serialize.dump()", "obj.dump()"],
            correctAnswer: "pickle.dump()",
          },
          {
            question: "What is the output of `{'a': 1, 'b': 2}.get('c', 3)`?",
            options: ["1", "2", "3", "None"],
            correctAnswer: "3",
          },
          {
            question: "What is the main difference between `is` and `==` in Python?",
            options: [
              "`is` checks identity, `==` checks value",
              "`is` checks value, `==` checks identity",
              "`is` compares types, `==` compares values",
              "`is` and `==` are identical",
            ],
            correctAnswer: "`is` checks identity, `==` checks value",
          },
        ],
      },
      
    //   // Example: Start quiz by category
    //   function startQuiz(category) {
    //     console.log(pythonQuizData[category]); // Displays selected category's questions
    //   }
    
    
    // Java Quiz Data
     javaQuizData : {
        easy: [
          {
            question: "What is the file extension for a Java source file?",
            options: [".java", ".jav", ".class", ".js"],
            correctAnswer: ".java",
          },
          {
            question: "Which method is the entry point of any Java program?",
            options: [
              "main()",
              "start()",
              "run()",
              "entry()",
            ],
            correctAnswer: "main()",
          },
          {
            question: "Which keyword is used to declare a class in Java?",
            options: ["class", "Class", "public", "def"],
            correctAnswer: "class",
          },
          {
            question: "What is the output of `System.out.println(5 + 3);`?",
            options: ["8", "53", "Error", "None"],
            correctAnswer: "8",
          },
          {
            question: "Which data type is used to store a single character in Java?",
            options: ["char", "string", "Character", "text"],
            correctAnswer: "char",
          },
          {
            question: "Which of the following is NOT a valid Java data type?",
            options: ["int", "float", "real", "boolean"],
            correctAnswer: "real",
          },
          {
            question: "Which keyword is used to create an object in Java?",
            options: ["new", "object", "create", "class"],
            correctAnswer: "new",
          },
          {
            question: "Which of the following is a valid way to declare an array in Java?",
            options: [
              "int[] arr;",
              "arr: int[];",
              "array int arr;",
              "int arr{};",
            ],
            correctAnswer: "int[] arr;",
          },
          {
            question: "What does `System.out.println()` do?",
            options: [
              "Prints a message to the console",
              "Reads input from the user",
              "Stops program execution",
              "Compiles the program",
            ],
            correctAnswer: "Prints a message to the console",
          },
          {
            question: "Which of the following is NOT a Java keyword?",
            options: ["class", "public", "integer", "return"],
            correctAnswer: "integer",
          },
        ],
        medium: [
          {
            question: "What is the size of an int in Java?",
            options: ["4 bytes", "2 bytes", "8 bytes", "1 byte"],
            correctAnswer: "4 bytes",
          },
          {
            question: "Which method is used to compare two strings in Java?",
            options: ["equals()", "compare()", "compareTo()", "match()"],
            correctAnswer: "equals()",
          },
          {
            question: "What is the purpose of the `this` keyword in Java?",
            options: [
              "Refers to the current object",
              "Creates a new object",
              "Returns the superclass object",
              "References a static method",
            ],
            correctAnswer: "Refers to the current object",
          },
          {
            question: "What will the following code output?\n\n```java\nSystem.out.println(10 / 3);\n```",
            options: ["3", "3.33", "Error", "None"],
            correctAnswer: "3",
          },
          {
            question: "Which collection does NOT allow duplicate elements?",
            options: ["Set", "List", "ArrayList", "Vector"],
            correctAnswer: "Set",
          },
          {
            question: "What will `System.out.println(\"Hello\" + null);` output?",
            options: ["Hellonull", "nullHello", "Error", "None"],
            correctAnswer: "Hellonull",
          },
          {
            question: "Which access modifier allows visibility within the same package only?",
            options: ["default", "public", "protected", "private"],
            correctAnswer: "default",
          },
          {
            question: "What is a constructor in Java?",
            options: [
              "A method to initialize objects",
              "A type of method to destroy objects",
              "A static variable",
              "A private method",
            ],
            correctAnswer: "A method to initialize objects",
          },
          {
            question: "Which of the following is a wrapper class in Java?",
            options: ["Integer", "int", "Float", "boolean"],
            correctAnswer: "Integer",
          },
          {
            question: "Which keyword is used to inherit a class in Java?",
            options: ["extends", "inherits", "super", "implement"],
            correctAnswer: "extends",
          },
        ],
        hard: [
          {
            question: "What will `System.out.println(10 << 2);` output?",
            options: ["40", "20", "50", "Error"],
            correctAnswer: "40",
          },
          {
            question: "What is the purpose of the `final` keyword in Java?",
            options: [
              "To define constants or prevent method overriding",
              "To define static methods",
              "To make a method public",
              "To create abstract classes",
            ],
            correctAnswer: "To define constants or prevent method overriding",
          },
          {
            question: "What will happen if a constructor is declared private in Java?",
            options: [
              "It prevents object creation outside the class",
              "It makes the class abstract",
              "It makes the constructor static",
              "It throws a compilation error",
            ],
            correctAnswer: "It prevents object creation outside the class",
          },
          {
            question: "What is a functional interface in Java?",
            options: [
              "An interface with exactly one abstract method",
              "An interface with multiple abstract methods",
              "An interface that extends another interface",
              "An interface implemented by a class",
            ],
            correctAnswer: "An interface with exactly one abstract method",
          },
          {
            question: "What is the output of the following code?\n\n```java\nint a = 5;\nSystem.out.println(++a);\n```",
            options: ["6", "5", "Error", "None"],
            correctAnswer: "6",
          },
          {
            question: "Which keyword is used to handle exceptions in Java?",
            options: ["try-catch", "throw", "error", "catch-except"],
            correctAnswer: "try-catch",
          },
          {
            question: "What is the result of `Math.floor(5.9)` in Java?",
            options: ["5.0", "6.0", "5", "6"],
            correctAnswer: "5.0",
          },
          {
            question: "What is the purpose of the `synchronized` keyword in Java?",
            options: [
              "To control thread access to critical sections",
              "To stop thread execution",
              "To start a new thread",
              "To call static methods",
            ],
            correctAnswer: "To control thread access to critical sections",
          },
          {
            question: "What will `System.out.println(\"A\" + \"B\".charAt(0));` output?",
            options: ["AB", "A66", "A0", "Error"],
            correctAnswer: "AB",
          },
          {
            question: "Which of these statements about Java threads is correct?",
            options: [
              "A thread can be started multiple times",
              "The `start()` method is used to start a thread",
              "A thread must implement the Serializable interface",
              "Threads are always daemon threads",
            ],
            correctAnswer: "The `start()` method is used to start a thread",
          },
        ],
      }
    }
    //   // Example: Start quiz by category
    //   function startQuiz(category) {
    //     console.log(javaQuizData[category]); // Displays selected category's questions
    //   } 