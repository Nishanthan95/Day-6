class Person {
    constructor(name, age, gender, work, education) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.work = work;
        this.education = education;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setAge(age) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    setGender(gender) {
        this.gender = gender;
    }

    getGender() {
        return this.gender;
    }

    setWork(work) {
        this.work = work;
    }

    getWork() {
        return this.work;
    }

    setEducation(education){
        this.education = education;
    }

    getEducation(){
        return this.education;
    }

    toString() {
        return `Person: { Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, work: ${this.work}, education: ${this.education} }`;
    }
}
