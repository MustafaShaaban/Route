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
 *   03. solution*
 *
 *
 *
 ----------------------------------------------------------------------------------*/

/**
 *
 * @type {{init: main.init, _: main._}}
 */
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
 *
 */
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
    q10: {
        input: main._('#evenNumbersBetween'),
        solution: main._('.result-10 .output')
    },
    q11: {
        input1: main._('#inputPowerNumber'),
        input2: main._('#inputPowerPow'),
        btn: main._('#inputPowerBtn'),
        solution: main._('.result-11 .output')
    },
    q12: {
        input1: main._('#avgInputSub1'),
        input2: main._('#avgInputSub2'),
        input3: main._('#avgInputSub3'),
        input4: main._('#avgInputSub4'),
        input5: main._('#avgInputSub5'),
        btn: main._('#avgInputBtn'),
        solution: {
            total: main._('.result-12 .total-marks strong'),
            avg: main._('.result-12 .avg-marks strong'),
            perc: main._('.result-12 .perc strong')
        }
    },
    q13: {
        input: main._('#numberOfDaysInput'),
        solution: main._('.result-13 .output')
    },
    q14: {
        input1: main._('#calcGradePhysics'),
        input2: main._('#calcGradeChemistry'),
        input3: main._('#calcGradeBiology'),
        input4: main._('#calcGradeMathematics'),
        input5: main._('#calcGradeComputer'),
        btn: main._('#calcGradeBtn'),
        solution: main._('.result-14')
    },
    q15: {
        input1: main._('#simpleCalcInput1'),
        input2: main._('#simpleCalcOperator'),
        input3: main._('#simpleCalcInput2'),
        btn: main._('#calcBtn'),
        solution: main._('.result-15 .output')
    }
};

/**
 * 1- Write a program that allow to user enter number then print it.
 *
 * @type {{init: solution1.init, getOutput: solution1.getOutput}}
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

/**
 * 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no.
 *
 * @type {{init: solution2.init, getOutput: solution2.getOutput}}
 */
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
                UICtr.q2.solution.innerHTML = `<span class="text-danger">No!, this number <strong>${$this.value}</strong> isn't valid.</span>`;
            }

        });
    }
};

/**
 * 3- Write a program that allows the user to insert 2 integers then print the max.
 *
 * @type {{init: solution3.init, getOutput: solution3.getOutput}}
 */
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

/**
 * 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
 *
 * @type {{init: solution4.init, getOutput: solution4.getOutput}}
 */
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

/**
 * 5- Write a program that take 3 integers from user then print the max element and the min element.
 *
 * @type {{init: solution5.init, getOutput: solution5.getOutput}}
 */
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

/**
 * 6- Write a program that allows the user to insert integer number then check If a number is oven or odd.
 *
 * @type {{init: solution6.init, getOutput: solution6.getOutput}}
 */
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

/**
 * 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant.
 *
 * @type {{init: solution7.init, getOutput: solution7.getOutput}}
 */
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

/**
 * 8- Write a program that allows user to insert integer then print all numbers between 1 to that’s number.
 *
 * @type {{init: solution8.init, getOutput(): void}}
 */
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

            if (Math.abs(Number($this.value)) > 1000) {
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

/**
 * 9- Write a program that allows user to insert integer then print a multiplication table up to 12.
 *
 * @type {{init: solution9.init, getOutput(): void}}
 */
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

            if ($this.value === '' || Number($this.value) === 0) {
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

/**
 * 10- Write a program that allows to user to insert number then print all even numbers between 1 to this number.
 *
 * @type {{init: solution10.init, getOutput(): void}}
 */
const solution10 = {
    init: () => {
        solution10.getOutput();
    },

    getOutput: () => {
        UICtr.q10.input.addEventListener('keyup', function (e) {
            e.preventDefault();
            let $this     = e.currentTarget,
                maxNumber = Number($this.value),
                numbers   = '',
                i;

            if ($this.value === '' || Number($this.value) === 0) {
                UICtr.q10.solution.innerHTML = '';
                return;
            }

            if (Math.abs(Number($this.value)) > 1000) {
                UICtr.q8.solution.innerHTML = "<strong class='text-danger'>El PC hyz3l gamed kda mnk tany :D</strong>";
                return;
            }

            if (Number($this.value) > 0) {
                for (i = 1; i < maxNumber; i++) {
                    if (i % 2 === 0) {
                        numbers += `${i}, `;
                    }
                }
            } else {
                for (i = 1; i > maxNumber; i--) {
                    if (i !== 0 && i % 2 === 0) {
                        numbers += `${i}, `;
                    }
                }

            }

            UICtr.q10.solution.innerHTML = `[ <strong>${numbers.substring(0, numbers.length - 2)}</strong> ]`;

        });
    }
};

/**
 * 11- Write a program that take two integers then print the power.
 *
 * @type {{init: solution11.init, getOutput(): void}}
 */
const solution11 = {
    init: () => {
        solution11.getOutput();
    },

    getOutput: () => {
        UICtr.q11.btn.addEventListener('click', function (e) {
            e.preventDefault();
            let firstInput  = UICtr.q11.input1.value,
                secondInput = UICtr.q11.input2.value;

            if (firstInput === '' || secondInput === '' || Number(firstInput) === 0 || Number(secondInput) === 0) {
                UICtr.q11.solution.innerHTML = '';
            } else {
                UICtr.q11.solution.innerHTML = `Your result is <strong class="text-success">${Math.pow(Number(firstInput), Number(secondInput))}</strong>`;
            }

        });
    }
};

/**
 * 12- Write a program to enter marks of five subjects and calculate total, average and percentage.
 *
 * @type {{init: solution12.init, calcAvg: solution12.calcAvg, calcPerc: (function(*=, *=): string), getOutput: solution12.getOutput}}
 */
const solution12 = {
    init: () => {
        solution12.getOutput();
    },

    getOutput: () => {
        UICtr.q12.btn.addEventListener('click', function (e) {
            e.preventDefault();
            let firstInput  = Number(UICtr.q12.input1.value),
                secondInput = Number(UICtr.q12.input2.value),
                thirdInput  = Number(UICtr.q12.input3.value),
                fourthInput = Number(UICtr.q12.input4.value),
                fifthInput  = Number(UICtr.q12.input5.value);

            if (Number(firstInput) < 0 || Number(secondInput) < 0 || Number(thirdInput) < 0 || Number(fourthInput) < 0 || Number(fifthInput) < 0) {
                solution12.resetVal();
                return;
            }
            if (Number(firstInput) > 100 || Number(secondInput) > 100 || Number(thirdInput) > 100 || Number(fourthInput) > 100 || Number(fifthInput) > 100) {
                solution12.resetVal();
                return;
            }

            let total = firstInput + secondInput + thirdInput + fourthInput + fifthInput,
                avg   = solution12.calcAvg([firstInput, secondInput, thirdInput, fourthInput, fifthInput]),
                perc  = solution12.calcPerc(total);

            UICtr.q12.solution.total.innerHTML = total;
            UICtr.q12.solution.avg.innerHTML = avg;
            UICtr.q12.solution.perc.innerHTML = perc;

        });
    },

    calcAvg: (numbers = []) => {
        if (numbers.length > 1) {
            let sub = 0;
            for (let i = 0; i <= numbers.length - 1; i++) {
                sub += numbers[i];
            }
            return sub > 0 ? sub / numbers.length : 0;
        }
    },

    calcPerc: (sub = 0, total = 500) => {
        return (sub * 100) / total + '%';
    },

    resetVal: () => {
        UICtr.q12.solution.total.innerHTML = '';
        UICtr.q12.solution.avg.innerHTML = '';
        UICtr.q12.solution.perc.innerHTML = '';

    }
};

/**
 * 13- Write a program to input month number and print number of days in that month.
 *
 * @type {{init: solution13.init, getDays: (function(*): number), getOutput: solution13.getOutput}}
 */
const solution13 = {
    init: () => {
        solution13.getOutput();
    },

    getOutput: () => {
        UICtr.q13.input.addEventListener('keyup', function (e) {
            e.preventDefault();
            let $this = e.currentTarget;

            if (Number($this.value) <= 0 || solution13.getDays(Number($this.value)) === 0) {
                UICtr.q13.solution.innerHTML = '';
                return;
            }

            UICtr.q13.solution.innerHTML = `Number of days for this month is <strong>${solution13.getDays(Number($this.value))}</strong>`;
        });
    },

    getDays: (month) => {
        let days;

        if (month === 4 || month === 6 || month === 9 || month === 11) {
            days = 30;
        } else if (month === 2) {
            days = 2;
        } else {
            days = 31;
        }

        return days;
    }
};

/**
 * 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade.
 *
 * @type {{init: solution14.init}}
 */
const solution14 = {
    init: () => {
        solution14.getOutput();
    },

    getOutput: () => {
        UICtr.q14.btn.addEventListener('click', function (e) {
            e.preventDefault();
            let firstInput  = Number(UICtr.q14.input1.value),
                secondInput = Number(UICtr.q14.input2.value),
                thirdInput  = Number(UICtr.q14.input3.value),
                fourthInput = Number(UICtr.q14.input4.value),
                fifthInput  = Number(UICtr.q14.input5.value);

            if (Number(firstInput) < 0 || Number(secondInput) < 0 || Number(thirdInput) < 0 || Number(fourthInput) < 0 || Number(fifthInput) < 0) {
                UICtr.q14.solution.innerHTML = "";
                return;
            }
            if (Number(firstInput) > 100 || Number(secondInput) > 100 || Number(thirdInput) > 100 || Number(fourthInput) > 100 || Number(fifthInput) > 100) {
                UICtr.q14.solution.innerHTML = "";
                return;
            }

            let total = firstInput + secondInput + thirdInput + fourthInput + fifthInput,
                grade = solution14.getGrade(total);

            UICtr.q14.solution.innerHTML = `Your grade is <strong>${grade}</strong>`;

        });
    },

    calcPerc: (sub = 0, total = 500) => {
        return (sub * 100) / total;
    },

    getGrade: (sub) => {
        let perc  = solution14.calcPerc(sub),
            grade = '';

        if (perc >= 90) {
            grade = 'A';
        } else if (perc >= 80) {
            grade = 'B';
        } else if (perc >= 70) {
            grade = 'C';
        } else if (perc >= 60) {
            grade = 'D';
        } else if (perc >= 40) {
            grade = 'E';
        } else {
            grade = 'F';
        }

        return grade
    }
};

/**
 * 15- Write a program to create Simple Calculator Using switch case.
 *
 * @type {{init: solution15.init, calc: (function(*=, *=, *=): number), getOutput: solution15.getOutput}}
 */
const solution15 = {
    init: () => {
        solution15.getOutput();
    },

    getOutput: () => {
        UICtr.q15.btn.addEventListener('click', function (e) {
            e.preventDefault();
            let firstInput  = Number(UICtr.q15.input1.value),
                selectBox   = UICtr.q15.input2.options,
                operator    = UICtr.q15.input2.options[selectBox.selectedIndex].value,
                secondInput = Number(UICtr.q15.input3.value);

            if (operator !== '+' && operator !== '-' && operator !== '/' && operator !== '*' && operator !== '^' && operator !== '%') {
                UICtr.q15.solution.innerHTML = '';
                return;
            }

            UICtr.q15.solution.innerHTML = `Your result is: <strong>${solution15.calc(firstInput, secondInput, operator)}</strong>`;
        });
    },

    calc: (firstInput, secondInput, operator = '+') => {
        let result = 0;
        switch (operator) {
            case '+':
                result = firstInput + secondInput;
                break;
            case '-':
                result = firstInput - secondInput;
                break;
            case '/':
                result = firstInput / secondInput;
                break;
            case '*':
                result = firstInput * secondInput;
                break;
            case '%':
                result = firstInput % secondInput;
                break;
            case '^':
                result = Math.pow(firstInput, secondInput);
                break;
            default:
                break;
        }

        return result;
    }
};

window.onload = () => {
    main.init();
};