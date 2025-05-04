document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('sidebarToggle');

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    // AI Tutor Bot chat functionality with improved response simulation
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    function appendMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', sender);
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Improved bot responses
    const botResponses = [
        "I'm here to help with your homework! Could you please provide more details?",
        "That's an interesting question! Let me think...",
        "Here's what I found on that topic.",
        "Can you clarify your question a bit more?",
        "Let's work through this problem step by step.",
        "I recommend reviewing your class notes on this subject.",
        "Would you like some examples to understand better?",
        "Great question! Here's an explanation.",
        "I'm not sure about that, but I can help you find the answer.",
        "Let's explore this topic together."
    ];

    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const userMessage = chatInput.value.trim();
        if (userMessage === '') return;
        appendMessage(userMessage, 'user');
        chatInput.value = '';

        // Simulate bot response with random selection and delay
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * botResponses.length);
            const botResponse = "AI Tutor Bot: " + botResponses[randomIndex];
            appendMessage(botResponse, 'bot');
        }, 1000);
    });

    // Multilingual support functionality
    const languageSelect = document.getElementById('language-select');
    const multilingualSection = document.getElementById('multilingual');

    const multilingualContent = {
        en: {
            schoolGrades: ["LKG", "UKG", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade", "6th Grade", "7th Grade", "8th Grade", "9th Grade", "10th Grade"],
            pucCourses: ["Science", "Commerce", "Arts"],
            degreeCourses: ["Bachelor of Science (B.Sc)", "Bachelor of Commerce (B.Com)", "Bachelor of Arts (B.A)", "Bachelor of Engineering (B.E)", "Bachelor of Technology (B.Tech)"],
            postgraduateCourses: ["Master of Science (M.Sc)", "Master of Commerce (M.Com)", "Master of Arts (M.A)", "Master of Business Administration (MBA)", "Master of Technology (M.Tech)"]
        },
        es: {
            schoolGrades: ["LKG", "UKG", "1er Grado", "2do Grado", "3er Grado", "4to Grado", "5to Grado", "6to Grado", "7mo Grado", "8vo Grado", "9no Grado", "10mo Grado"],
            pucCourses: ["Ciencia", "Comercio", "Artes"],
            degreeCourses: ["Licenciatura en Ciencias (B.Sc)", "Licenciatura en Comercio (B.Com)", "Licenciatura en Artes (B.A)", "Licenciatura en Ingeniería (B.E)", "Licenciatura en Tecnología (B.Tech)"],
            postgraduateCourses: ["Maestría en Ciencias (M.Sc)", "Maestría en Comercio (M.Com)", "Maestría en Artes (M.A)", "Maestría en Administración de Empresas (MBA)", "Maestría en Tecnología (M.Tech)"]
        },
        fr: {
            schoolGrades: ["LKG", "UKG", "1ère Année", "2ème Année", "3ème Année", "4ème Année", "5ème Année", "6ème Année", "7ème Année", "8ème Année", "9ème Année", "10ème Année"],
            pucCourses: ["Science", "Commerce", "Arts"],
            degreeCourses: ["Licence en Sciences (B.Sc)", "Licence en Commerce (B.Com)", "Licence en Arts (B.A)", "Licence en Ingénierie (B.E)", "Licence en Technologie (B.Tech)"],
            postgraduateCourses: ["Master en Sciences (M.Sc)", "Master en Commerce (M.Com)", "Master en Arts (M.A)", "Master en Administration des Affaires (MBA)", "Master en Technologie (M.Tech)"]
        },
        hi: {
            schoolGrades: ["एलकेजी", "यूकेजी", "पहली कक्षा", "दूसरी कक्षा", "तीसरी कक्षा", "चौथी कक्षा", "पांचवीं कक्षा", "छठी कक्षा", "सातवीं कक्षा", "आठवीं कक्षा", "नवीं कक्षा", "दसवीं कक्षा"],
            pucCourses: ["विज्ञान", "वाणिज्य", "कला"],
            degreeCourses: ["बैचलर ऑफ साइंस (B.Sc)", "बैचलर ऑफ कॉमर्स (B.Com)", "बैचलर ऑफ आर्ट्स (B.A)", "बैचलर ऑफ इंजीनियरिंग (B.E)", "बैचलर ऑफ टेक्नोलॉजी (B.Tech)"],
            postgraduateCourses: ["मास्टर ऑफ साइंस (M.Sc)", "मास्टर ऑफ कॉमर्स (M.Com)", "मास्टर ऑफ आर्ट्स (M.A)", "मास्टर ऑफ बिजनेस एडमिनिस्ट्रेशन (MBA)", "मास्टर ऑफ टेक्नोलॉजी (M.Tech)"]
        },
        zh: {
            schoolGrades: ["幼儿园", "学前班", "一年级", "二年级", "三年级", "四年级", "五年级", "六年级", "七年级", "八年级", "九年级", "十年级"],
            pucCourses: ["科学", "商业", "艺术"],
            degreeCourses: ["理学学士 (B.Sc)", "商业学士 (B.Com)", "文学学士 (B.A)", "工程学士 (B.E)", "技术学士 (B.Tech)"],
            postgraduateCourses: ["理学硕士 (M.Sc)", "商业硕士 (M.Com)", "文学硕士 (M.A)", "工商管理硕士 (MBA)", "技术硕士 (M.Tech)"]
        }
    };

    function updateMultilingualContent(lang) {
        const content = multilingualContent[lang] || multilingualContent['en'];
        const gradeList = multilingualSection.querySelector('.grade-list');
        const pucList = multilingualSection.querySelectorAll('.course-list')[0];
        const degreeList = multilingualSection.querySelectorAll('.course-list')[1];
        const postgraduateList = multilingualSection.querySelectorAll('.course-list')[2];

        gradeList.innerHTML = '';
        content.schoolGrades.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            gradeList.appendChild(li);
        });

        pucList.innerHTML = '';
        content.pucCourses.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            pucList.appendChild(li);
        });

        degreeList.innerHTML = '';
        content.degreeCourses.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            degreeList.appendChild(li);
        });

        postgraduateList.innerHTML = '';
        content.postgraduateCourses.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            postgraduateList.appendChild(li);
        });
    }

    languageSelect.addEventListener('change', (e) => {
        updateMultilingualContent(e.target.value);
    });

    // Initialize multilingual content to default language
    updateMultilingualContent(languageSelect.value);

    // E-commerce functionality
    const products = [
        { id: 1, name: "Notebook", price: 3.99, image: "https://cdn-icons-png.flaticon.com/128/2913/2913461.png" },
        { id: 2, name: "Pen", price: 1.49, image: "https://cdn-icons-png.flaticon.com/128/2913/2913469.png" },
        { id: 3, name: "Pencil", price: 0.99, image: "https://cdn-icons-png.flaticon.com/128/2913/2913467.png" },
        { id: 4, name: "Eraser", price: 0.79, image: "https://cdn-icons-png.flaticon.com/128/2913/2913465.png" },
        { id: 5, name: "Ruler", price: 1.29, image: "https://cdn-icons-png.flaticon.com/128/2913/2913463.png" }
    ];

    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    let cart = [];

    function renderProducts() {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" />
                <div>${product.name}</div>
                <div>$${product.price.toFixed(2)}</div>
                <button data-id="${product.id}">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });
    }

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            const li = document.createElement('li');
            li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = '×';
            removeBtn.addEventListener('click', () => {
                removeFromCart(item.id);
            });
            li.appendChild(removeBtn);
            cartItems.appendChild(li);
        });
        cartTotal.textContent = total.toFixed(2);
        checkoutBtn.disabled = cart.length === 0;
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    }

    productList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const id = parseInt(e.target.getAttribute('data-id'));
            addToCart(id);
        }
    });

    checkoutBtn.addEventListener('click', () => {
        alert('Thank you for your purchase! Total: $' + cartTotal.textContent);
        cart = [];
        updateCart();
    });

    renderProducts();

    // Study timer functionality
    const timerDisplay = document.getElementById('timer-display');
    const startBtn = document.getElementById('start-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const resetBtn = document.getElementById('reset-btn');

    let timerInterval = null;
    let elapsedSeconds = 0;

    function updateTimerDisplay() {
        const hours = Math.floor(elapsedSeconds / 3600);
        const minutes = Math.floor((elapsedSeconds % 3600) / 60);
        const seconds = elapsedSeconds % 60;
        timerDisplay.textContent = 
            `${hours.toString().padStart(2, '0')}:` +
            `${minutes.toString().padStart(2, '0')}:` +
            `${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        if (timerInterval) return;
        timerInterval = setInterval(() => {
            elapsedSeconds++;
            updateTimerDisplay();
        }, 1000);
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        resetBtn.disabled = false;
    }

    function pauseTimer() {
        if (!timerInterval) return;
        clearInterval(timerInterval);
        timerInterval = null;
        startBtn.disabled = false;
        pauseBtn.disabled = true;
    }

    function resetTimer() {
        pauseTimer();
        elapsedSeconds = 0;
        updateTimerDisplay();
        resetBtn.disabled = true;
    }

    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);

    updateTimerDisplay();

    // Dashboard & Smart Reminders functionality
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const taskList = document.getElementById('task-list');

    let tasks = [];

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
        }
    }

    function renderTasks() {
        taskList.innerHTML = '';
        const now = new Date();
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = task.completed ? 'completed' : '';
            const dueDate = new Date(task.dueDate);
            const isOverdue = !task.completed && dueDate < now;
            li.innerHTML = `
                <span>${task.text} (Due: ${task.dueDate})${isOverdue ? ' ⚠️' : ''}</span>
                <div>
                    <button class="complete-btn">${task.completed ? 'Undo' : 'Done'}</button>
                    <button class="delete-btn">×</button>
                </div>
            `;
            const completeBtn = li.querySelector('.complete-btn');
            const deleteBtn = li.querySelector('.delete-btn');

            completeBtn.addEventListener('click', () => {
                tasks[index].completed = !tasks[index].completed;
                saveTasks();
                renderTasks();
            });

            deleteBtn.addEventListener('click', () => {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            });

            taskList.appendChild(li);
        });
    }

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = taskInput.value.trim();
        const dueDate = dueDateInput.value;
        if (!text || !dueDate) return;
        tasks.push({ text, dueDate, completed: false });
        saveTasks();
        renderTasks();
        taskForm.reset();
    });

    loadTasks();
    renderTasks();

    // Quizzes & Leaderboards functionality
    const quizContainer = document.querySelector('.quiz-container');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const quizResult = document.getElementById('quiz-result');
    const leaderboardList = document.getElementById('leaderboard-list');

    const quizQuestions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: 0
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: 1
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: 3
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOptionIndex = null;

    function loadLeaderboard() {
        const savedLeaderboard = localStorage.getItem('leaderboard');
        if (savedLeaderboard) {
            return JSON.parse(savedLeaderboard);
        }
        return [];
    }

    function saveLeaderboard(leaderboard) {
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    }

    function updateLeaderboard(name, score) {
        let leaderboard = loadLeaderboard();
        leaderboard.push({ name, score });
        leaderboard.sort((a, b) => b.score - a.score);
        if (leaderboard.length > 10) {
            leaderboard = leaderboard.slice(0, 10);
        }
        saveLeaderboard(leaderboard);
        renderLeaderboard();
    }

    function renderLeaderboard() {
        const leaderboard = loadLeaderboard();
        leaderboardList.innerHTML = '';
        leaderboard.forEach(entry => {
            const li = document.createElement('li');
            li.textContent = `${entry.name}: ${entry.score} points`;
            leaderboardList.appendChild(li);
        });
    }

    function loadQuestion() {
        const questionObj = quizQuestions[currentQuestionIndex];
        quizQuestion.textContent = questionObj.question;
        quizOptions.innerHTML = '';
        selectedOptionIndex = null;
        nextQuestionBtn.disabled = true;
        quizResult.textContent = '';

        questionObj.options.forEach((option, index) => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => {
                selectedOptionIndex = index;
                Array.from(quizOptions.children).forEach(child => {
                    child.firstChild.classList.remove('selected');
                });
                button.classList.add('selected');
                nextQuestionBtn.disabled = false;
            });
            li.appendChild(button);
            quizOptions.appendChild(li);
        });
    }

    nextQuestionBtn.addEventListener('click', () => {
        if (selectedOptionIndex === null) return;
        const questionObj = quizQuestions[currentQuestionIndex];
        if (selectedOptionIndex === questionObj.answer) {
            score++;
            quizResult.textContent = 'Correct!';
            quizResult.style.color = 'green';
        } else {
            quizResult.textContent = `Wrong! Correct answer: ${questionObj.options[questionObj.answer]}`;
            quizResult.style.color = 'red';
        }
        currentQuestionIndex++;
        nextQuestionBtn.disabled = true;

        if (currentQuestionIndex < quizQuestions.length) {
            setTimeout(() => {
                loadQuestion();
            }, 1500);
        } else {
            setTimeout(() => {
                quizQuestion.textContent = `Quiz completed! Your score: ${score} / ${quizQuestions.length}`;
                quizOptions.innerHTML = '';
                nextQuestionBtn.disabled = true;
                quizResult.textContent = '';

                const name = prompt('Enter your name for the leaderboard:');
                if (name) {
                    updateLeaderboard(name, score);
                }
                currentQuestionIndex = 0;
                score = 0;
                loadQuestion();
            }, 1500);
        }
    });

    renderLeaderboard();
    loadQuestion();

    // Project Resources functionality
    const resourceForm = document.getElementById('resource-form');
    const resourceInput = document.getElementById('resource-input');
    const resourceList = document.getElementById('resource-list');

    let resources = [];

    function saveResources() {
        localStorage.setItem('resources', JSON.stringify(resources));
    }

    function loadResources() {
        const savedResources = localStorage.getItem('resources');
        if (savedResources) {
            resources = JSON.parse(savedResources);
        }
    }

    function renderResources() {
        resourceList.innerHTML = '';
        resources.forEach((resource, index) => {
            const li = document.createElement('li');
            li.textContent = resource;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '×';
            deleteBtn.addEventListener('click', () => {
                resources.splice(index, 1);
                saveResources();
                renderResources();
            });
            li.appendChild(deleteBtn);
            resourceList.appendChild(li);
        });
    }

    resourceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const resourceName = resourceInput.value.trim();
        if (!resourceName) return;
        resources.push(resourceName);
        saveResources();
        renderResources();
        resourceForm.reset();
    });

    loadResources();
    renderResources();
});
