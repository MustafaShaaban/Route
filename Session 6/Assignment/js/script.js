/** -----------------------------------------------------------------------------------
 *
 *   Package Name: Session 6 Assignment 6 - Main Script File
 *   Version: 1.0
 *   Author: Mustafa Shaaban
 *
 *   OBJECTS INDEX
 *   ===================
 *   01. UICtr
 *      The object which contain the most important elements to be loaded once
 *
 *   02. main
 *      The object which contain the front page functions
 *
 *
 ----------------------------------------------------------------------------------*/

const main = {
    init: () => {
        solution1.init();
        solution2.init();
        solution3.init();
        solution4.init();
        solution5.init();
        solution6.init();
        solution7.init();
        solution8.init();
        solution9.init();
        solution10.init();
        solution11.init();
        solution12.init();
        solution13.init();
        solution14.init();
        solution15.init();
    },
    _: (el) => {
        let elements = document.querySelector(el);
        if (typeof elements !== 'undefined' && null !== elements) {
            return elements;
        } else {
            console.error('The element is not defined');
        }
    }
};

/**
 *
 * @type {{init: solution1.init, getOutput(): void}}
 */
const solution1 = {
    init: () => {
        solution1.getOutput();
    },

    getOutput: () => {
        UICtr.q1.input.addEventListener('keyup', function (e) {
            e.preventDefault();
            let $this = e.currentTarget;

            if ($this.value === '') {
                UICtr.q1.solution.innerHTML = '';
                return
            }

            UICtr.q1.solution.innerHTML = Number($this.value);
        });
    }
};

const solution2 = {
    init: () => {
        solution2.getOutput();
    },

    getOutput: () => {
        UICtr.q2.input.addEventListener('keyup', function (e) {
            e.preventDefault();
            let $this = e.currentTarget;

            if ($this.value === '') {
                UICtr.q2.solution.innerHTML = '';
                return
            }

            if ((Number($this.value) % 3) === 0 || (Number($this.value) % 4) === 0) {
                UICtr.q2.solution.innerHTML = `<span class="text-success">Yes, this number <strong>${$this.value}</strong> is valid.</span>`;
            } else {
                UICtr.q2.solution.innerHTML = `<span class="text-danger">Sorry!, this number <strong>${$this.value}</strong> isn't valid.</span>`;
            }

        });
    }
};


const solution3 = {
    init: () => {
        solution3.getOutput();
    },

    getOutput: () => {
        UICtr.q3.btn.addEventListener('click', function (e) {
            e.preventDefault();
            let firstInput  = UICtr.q3.input1.value,
                secondInput = UICtr.q3.input2.value;

            if (firstInput === '' || secondInput === '') {
                UICtr.q3.solution.innerHTML = '';
            } else {
                UICtr.q3.solution.innerHTML = Math.max(Number(firstInput), Number(secondInput));
            }

        });
    }
};

const UICtr = {
    q1: {
        input: main._('#inputPrint'),
        solution: main._('.result-1 .output')
    },
    q2: {
        input: main._('#CheckDivideInput'),
        solution: main._('.result-2 .output')
    },
    q3: {
        input1: main._('#minMaxInput1'),
        input2: main._('#minMaxInput2'),
        btn: main._('#minMaxBtn'),
        solution: main._('.result-3 .output')
    },
    q4: {
        input: main._('#negativePositiveInput'),
        solution: main._('.result-4 .output')
    },
    q5: {
        input1: main._('#MinMaxTripleInput1'),
        input2: main._('#MinMaxTripleInput2'),
        input3: main._('#MinMaxTripleInput3'),
        btn: main._('#MinMaxTripleBtn'),
        solutionMax: main._('.result-5 .max-number'),
        solutionMin: main._('.result-5 .min-number')
    },
    q6: {
        input: main._('#evenOrOddInput'),
        solution: main._('.result-6 .output')
    },
    q7: {
        input: main._('#vowelChrInput'),
        solution: main._('.result-7 .output')
    },
    q8: {
        input: main._('#numbersBetweenInput'),
        solution: main._('.result-8 .output')
    },
    q9: {
        input: main._('#multiplicationInput'),
        solution: main._('.result-9 .output')
    },
    q10: {},
    q11: {},
    q12: {},
    q13: {},
    q14: {},
    q15: {}
};

const solution4 = {
    init: () => {
        solution4.getOutput();
    },

    getOutput: () => {
        UICtr.q4.input.addEventListener('keyup', function (e) {
            e.preventDefault();
            let $this = e.currentTarget;

            if ($this.value === '') {
                UICtr.q4.solution.innerHTML = '';
                return;
            }

            if (Number($this.value) === 0) {
                UICtr.q4.solution.innerHTML = `0 is neither positive nor negative`;
            } else if (Number($this.value) > 0) {
                UICtr.q4.solution.innerHTML = `The number you entered is <span class="text-success">Positive</span>`;
            } else if (Number($this.value) < 0) {
                UICtr.q4.solution.innerHTML = `The number you entered is <span class="text-danger">Negative</span>`;
            }

        });
    }
};

const solution5 = {
    init: () => {
        solution5.getOutput();
    },
    getOutput: () => {
        UICtr.q5.btn.addEventListener('click', function (e) {
            e.preventDefault();
            let firstInput  = UICtr.q5.input1.value,
                secondInput = UICtr.q5.input2.value,
                thirdInput  = UICtr.q5.input3.value;

            if (firstInput === '' || secondInput === '' || thirdInput === '') {
                UICtr.q5.solutionMax.innerHTML = '';
                UICtr.q5.solutionMin.innerHTML = '';
            } else {
                UICtr.q5.solutionMax.innerHTML = `Maximum number is ${Math.max(Number(firstInput), Number(secondInput), Number(thirdInput))}`;
                UICtr.q5.solutionMin.innerHTML = `Minimum number is ${Math.min(Number(firstInput), Number(secondInput), Number(thirdInput))}`;
            }

        });
    }
};

const solution6 = {
    init: () => {
        solution6.getOutput();
    },

    getOutput: () => {
        UICtr.q6.input.addEventListener('keyup', function (e) {
            e.preventDefault();
            let $this = e.currentTarget;

            if ($this.value === '') {
                UICtr.q6.solution.innerHTML = '';
                return;
            }

            if (Number($this.value) % 2 === 0) {
                UICtr.q6.solution.innerHTML = `The number you entered is <strong>Even</strong>`;
            } else {
                UICtr.q6.solution.innerHTML = `The number you entered is <strong>Odd</strong>`;
            }

        });
    }
};

const solution7 = {
    init: () => {
        solution7.getOutput();
    },

    getOutput: () => {
        UICtr.q7.input.addEventListener('keyup', function (e) {
            e.preventDefault();
            let $this  = e.currentTarget,
                vowels = ['a', 'e', 'l', 'o', 'u'];

            if ($this.value === '' || $this.value.length > 1) {
                UICtr.q6.solution.innerHTML = '';
                return;
            }

            if (vowels.includes($this.value)) {
                UICtr.q7.solution.innerHTML = `The character you entered <strong class="text-success">${$this.value.toUpperCase()}</strong> is Vowel`;
            } else {
                UICtr.q7.solution.innerHTML = `The character you entered <strong class="text-danger">${$this.value.toUpperCase()}</strong> isn't vowel`;
            }

        });
    }
};

const solution8 = {
    init: () => {
        solution8.getOutput();
    },

    getOutput: () => {
        UICtr.q8.input.addEventListener('keyup', function (e) {
            e.preventDefault();
            let $this     = e.currentTarget,
                maxNumber = Number($this.value),
                numbers   = '',
                i;

            if ($this.value === '' || Number($this.value) === 0) {
                UICtr.q8.solution.innerHTML = '';
                return;
            }

            if (Math.abs(Number($this.value)) > 10000) {
                UICtr.q8.solution.innerHTML = "<strong class='text-danger'>El PC hyz3l gamed kda mnk</strong>";
                return;
            }


            if (Number($this.value) > 0) {
                for (i = 1; i < maxNumber; i++) {
                    numbers += maxNumber === i + 1 ? `${i}` : `${i}, `;
                }
            } else {
                for (i = 1; i > maxNumber; i--) {
                    numbers += maxNumber === i - 1 ? `${i}` : `${i}, `;
                }
            }

            UICtr.q8.solution.innerHTML = `[ <strong>${numbers}</strong> ]`;

        });
    }
};

const solution9 = {
    init: () => {
        solution9.getOutput();
    },

    getOutput: () => {
        UICtr.q9.input.addEventListener('keyup', function (e) {
            e.preventDefault();
            let $this   = e.currentTarget,
                numbers = '',
                i;

            if ($this.value === '' || $this.value === 0) {
                UICtr.q9.solution.innerHTML = '';
                return;
            }

            for (i = 1; i <= 12; i++) {
                numbers += i === 12 ? `${i * Number($this.value)}` : `${i * Number($this.value)}, `;
            }

            UICtr.q9.solution.innerHTML = `[ <strong>${numbers}</strong> ]`;

        });
    }
};

const solution10 = {
    init: () => {
    }
};

const solution11 = {
    init: () => {
    }
};

const solution12 = {
    init: () => {
    }
};

const solution13 = {
    init: () => {
    }
};

const solution14 = {
    init: () => {
    }
};

const solution15 = {
    init: () => {
        console.log('sssss');
    }
};

window.onload = () => {
    main.init();
};