//1 задача
function calculateGrade(students) {
    const result = [];
    
    for (const student of students) {
        let sum = 0;
        
        for (let i = 0; i < student.scores.length; i++) {
            sum += student.scores[i];
        }
        
        const average = sum / student.scores.length;
        let grade;
        
        if (average >= 90) {
            grade = "A";
        } else if (average >= 80) {
            grade = "B";
        } else if (average >= 70) {
            grade = "C";
        } else {
            grade = "F";
        }
        
        const studentWithGrade = {
            ...student,
            average: Number(average.toFixed(2)),
            grade: grade
        };
        
        result.push(studentWithGrade);
    }
    
    return result;
}

//2 задача
const filterProducts = (products, filters = {}) => {
    const filteredProducts = [];
    
    for (const product of products) {
        let matchesFilters = true;
        
        if (filters.maxPrice !== undefined) {
            if (product.price > filters.maxPrice) {
                matchesFilters = false;
            }
        }

        if (filters.category !== undefined) {
            if (product.category !== filters.category) {
                matchesFilters = false;
            }
        }

        if (matchesFilters) {
            filteredProducts.push(product);
        }
    }
    
    return filteredProducts;
};

//тест
console.log("тестирование калькулятора оценок");
const students = [
    { name: "Алексей", scores: [85, 92, 78] },
    { name: "Мария", scores: [95, 87, 92] },
    { name: "Иван", scores: [65, 70, 68] },
    { name: "Ольга", scores: [92, 95, 98] }
];

const gradedStudents = calculateGrade(students);
console.log(gradedStudents);




console.log("\nтестирование фильтра товаров");
const products = [
    { name: "Ноутбук", price: 50000, category: "электроника" },
    { name: "Стул", price: 5000, category: "мебель" },
    { name: "Кофеварка", price: 15000, category: "электроника" },
    { name: "Наушники", price: 8000, category: "электроника" },
    { name: "Стол", price: 12000, category: "мебель" }
];

//фильтр по цене и категории
const filters1 = { maxPrice: 20000, category: "электроника" };
console.log("Фильтр: maxPrice: 20000, category: 'электроника'");
console.log(filterProducts(products, filters1));

//по цене
const filters2 = { maxPrice: 10000 };
console.log("\nФильтр: maxPrice: 10000");
console.log(filterProducts(products, filters2));

//по категории
const filters3 = { category: "мебель" };
console.log("\nФильтр: category: 'мебель'");
console.log(filterProducts(products, filters3));

//без фильтров
console.log("\nБез фильтров:");
console.log(filterProducts(products));

//пустые фильтры
console.log("\nПустые фильтры:");
console.log(filterProducts(products, {}));

