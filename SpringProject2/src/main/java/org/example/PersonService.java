package org.example;

import org.springframework.stereotype.Component;

@Component
public class PersonService {
    private PersonRepository personrepo;

    public PersonService(PersonRepository personrepo){
        this.personrepo = personrepo;
    }

    public PersonRepository getPersonrepo() {
        return personrepo;
    }

    public void setPersonrepo(PersonRepository personrepo) {
        this.personrepo = personrepo;
    }
}
