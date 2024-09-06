// Place your key bindings in this file to override the defaults
[
    {
        "key": "ctrl+shift+c",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
            "snippet": "console.log($1);$2"
        }
    },
    {
        "key": "ctrl+shift+l",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
            "snippet": "for(let ${1:name} = $2; $3; $4){\n\t${5}\n};$0",
        }
    },
    {
        "key": "ctrl+shift+w",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
            "snippet": "while($1){\n\t${5}\n};$0",
        }
    },
    {
        "key": "ctrl+shift+i",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
            "snippet": "if($1){\n\t${5}\n};$0"
        }
    },
    {
        "key": "ctrl+shift+d",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
            "snippet": "document.write($1);$2"
        }
    },
    {
        "key": "ctrl+shift+f",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
            "snippet":  "function ${1:name}($2) {\n\t${3}\n};$0"
        }
    }
]