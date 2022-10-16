export class EmployeeRequest{
    public Id: string;
    public LastName: string;
    public FirstName: string;

    constructor(id: string, lname: string, fname: string) {
        this.Id = id;
        this.LastName = lname;
        this.FirstName = fname;
    }
}