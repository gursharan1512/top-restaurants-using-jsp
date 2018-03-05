package com.project.restaurants;

import java.io.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.*;
import org.json.simple.parser.JSONParser;
import org.json.simple.*;
import org.json.simple.JSONObject;

/**
 * Servlet implementation class ReadJSON
 */
@WebServlet("/readJSON")
public class ReadJSON extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ReadJSON() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		JSONObject cityname=new JSONObject();
		JSONParser ob = new JSONParser();
		try {
			System.out.println("sharan");
			cityname = (JSONObject) ob.parse(new FileReader("/home/sapient/Documents/workspace-sts-3.9.2.RELEASE/top-restaurants-using-jsp/build/classes/com/project/restaurants/result.json"));
			System.out.println(cityname);
			response.setContentType("application/json");
			response.getWriter().write(cityname.toString());
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
