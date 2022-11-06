package Day2.StreamApi;

public class Employee {
    private String name;
    private String surname;
    private char gender;
    private int yearOfBirth;
    private int salary;

    @Override
    public String toString() {
        return "Employee{" +
                "name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", gender=" + gender +
                ", yearOfBirth=" + yearOfBirth +
                ", salary=" + salary +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public int getYearOfBirth() {
        return yearOfBirth;
    }

    public void setYearOfBirth(int yearOfBirth) {
        this.yearOfBirth = yearOfBirth;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public Employee(String name, String surname, char gender, int yearOfBirth, int salary) {
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.yearOfBirth = yearOfBirth;
        this.salary = salary;
    }
}
