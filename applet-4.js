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
        try{
            const response = await fetch(this.dataUrl);
            this.students = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    renderStudentList(students){

    }

}