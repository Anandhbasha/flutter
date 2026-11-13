package com.example.Basics;

import org.springframework.stereotype.Component;

@Component
public class FeeCalculator {
    public int calFees(String course){
        if(course.equalsIgnoreCase("Java")){
            return 15000;
        }
        if(course.equalsIgnoreCase("Python")){
            return 12000;
        }
        if(course.equalsIgnoreCase("React")){
            return 10000;
        }
        return  0;
    }
}
