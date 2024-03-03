let currentDifficulty = 'normal';

        const leetDicts = {
            'easy': {
                'a': '4',
                'e': '3',
                'l': '1',
                'o': '0',
                't': '7',
                's': '5'
            },
            'normal': {
                'a': '4',
                'b': '8',
                'c': '<',
                'd': '|)',
                'e': '3',
                'f': '|=',
                'g': '9',
                'h': '#',
                'i': '1',
                'j': '_|',
                'k': '|<',
                'l': '|',
                'm': '|\\/|',
                'n': '|\\|',
                'o': '0',
                'p': '|°',
                'q': '(,)',
                'r': '|2',
                's': '5',
                't': '7',
                'u': '|_|',
                'v': '\\/',
                'w': '\\/\\/',
                'x': '><',
                'y': '`/',
                'z': '2'
            },
            'hard': {
                'a':  '4',
                'b': '13',
                'c':  '[',
                'd': '|]',
                'e': '&',
                'f': '|=',
                'g':  '6',
                'h': '[-]',
                'i': '1',
                'j': '_|',
                'k': '|<',
                'l': '|',
                'm': '[V]',
                'n': '₪',
                'o': '<>',
                'p': '|Þ',
                'q': '(,)',
                'r': '12',
                's': '§',
                't': '†',
                'u': 'µ',
                'v': '\\/',
                'w': '\\/\\/',
                'x': '}{',
                'y': ' ¥',
                'z': '%'
            }
        };

        function leetConverter(text) {
            const leetDict = leetDicts[currentDifficulty];

            let leetText = "";
            for (let i = 0; i < text.length; i++) {
                const char = text[i].toLowerCase();
                leetText += leetDict[char] || text[i];
            }

            return leetText;
        }

        function setDifficulty(difficulty) {
            currentDifficulty = difficulty;
            document.getElementById("currentDifficulty").textContent = "Dificultad actual: " + difficulty;
        }

        function convertir() {
            const inputText = document.getElementById("textoOriginal").value;
            const leetResult = leetConverter(inputText);
            document.getElementById("resultadoLeet").textContent = "Lenguaje hacker (leet): " + leetResult;
        }