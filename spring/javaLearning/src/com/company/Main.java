package com.company;

import java.util.*;
import java.util.stream.Collectors;

public class Main {

    public static void main(String[] args) {
        List<Person> Allpersons = Persons();

        List<Person> males = Allpersons.stream().filter(person -> person.getGender().equals(Gender.MAlE)).collect(Collectors.toList());

        for(Person person : Allpersons){
            System.out.println(person.getName());
        }

        for(Person person : males){
            System.out.println(person.getName());
        }

        Allpersons.forEach(System.out::println);
    }

    private static List<Person> Persons(){
        return List.of(
                new Person("Sabari",22, Gender.MAlE),
                new Person("Sanjay",22, Gender.MAlE),
                new Person("Shruthi",22, Gender.FEMALE),
                new Person("Shivjith",22, Gender.MAlE),
                new Person("Theju",22, Gender.FEMALE),
                new Person("Nivashini",22, Gender.FEMALE),
                new Person("Manoj",22, Gender.FEMALE),
                new Person("Barani",22, Gender.FEMALE),
                new Person("Sushmitha",22, Gender.FEMALE)
        );
    }
}
