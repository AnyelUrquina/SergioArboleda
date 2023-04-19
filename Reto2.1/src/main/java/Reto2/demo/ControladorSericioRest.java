/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Reto2.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 * @author ASUS
 */@Controller
public class ControladorSericioRest {
    

    @GetMapping("/")
    public String inicio() {
        return "index";
    }

    @GetMapping("/Carro")
    public String car() {
        return "Carro";
    }

    @GetMapping("/cliente")
    public String Cliente() {
        return "cliente";
    }

    @GetMapping("/mensaje")
    public String Mensaje() {
        return "mensaje";
    }

}


    

