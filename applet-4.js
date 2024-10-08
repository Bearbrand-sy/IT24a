class studentList{
    constructor(dataUrl){
           this.dataUrl = dataUrl;
           this.students = [];
           this.init();
    }
    async init(){
           await this.fetchData();
           this.renderStudentList(this.students);
    }
    async fetchData(){
       
    }
    renderStudentList(students){

    }

}