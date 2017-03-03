/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.ex3;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.Person;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author William Pfaffe
 */
@WebServlet(name = "personServlet", urlPatterns = {"/personServlet"})
public class personServlet extends HttpServlet {

    Gson gson = new GsonBuilder().setPrettyPrinting().create();
//    Gson gson = new Gson();
    private static List<Person> persons = new ArrayList() {
        {
            add(new Person(1, "Hans", "Pedersen", 57));
            add(new Person(2, "Gerda", "von Höve", 89));
            add(new Person(3, "Frederik", "Brahms", 4));
            add(new Person(4, "Hanne", "Jash", 46));
            add(new Person(5, "Henriette", "Pust", 32));
            add(new Person(6, "Aishe", "Hassimi", 51));
            add(new Person(7, "Kasper", "Enoksen", 33));
        }
    };

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String arr = new Gson().toJson(persons);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().println(gson.toJson(persons));
        //        response.getWriter().write(quote);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String person = request.getParameter("person");
        String[] split = person.split(";");
        String firstName = split[0];
        String lastName = split[1];
        int age = Integer.parseInt(split[2]);
//        persons.add(new Person(100, split[0], split[1], Integer.parseInt(split[2])));
        response.getWriter().print(firstName + " " + lastName + " " + age);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
