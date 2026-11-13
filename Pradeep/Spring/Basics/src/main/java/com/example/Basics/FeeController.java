package com.example.Basics;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/fee")
public class FeeController {
    private final FeeCalculator calc;

    public FeeController (FeeCalculator calc) {
        this.calc = calc;
    }
    @GetMapping("/{course}")
    public int getFee(@PathVariable String course){
        return calc.calFees(course);
    }
}
