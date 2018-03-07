package com.project.restaurants;

import java.io.*;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.omg.Messaging.SyncScopeHelper;

/**
 * Servlet implementation class Zomato
 */


@WebServlet("/zomato")
public class Zomato extends HttpServlet {
	private static final long serialVersionUID = 1L;
	int count=0;
	JSONArray arr = new JSONArray();
	JSONArray arrAdd = new JSONArray();
	JSONArray arrRating = new JSONArray();
	JSONObject obj = new JSONObject();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Zomato() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		String resName = request.getParameter("rName");
		String resImg = request.getParameter("rImg");
		String resAdd = request.getParameter("rAdd");
		String resRating = request.getParameter("rRating");

		try {
			arr.add(count,resName);
			obj.put("name",arr);
			arrAdd.add(count,resAdd);
			obj.put("address",arrAdd);
			arrRating.add(count++,resRating);
			obj.put("rating",arrRating);
			System.out.println(obj);
			FileWriter fw=new FileWriter("//home//sapient//Documents//workspace-sts-3.9.2.RELEASE//top-restaurants-using-jsp//build//classes//com//project//restaurants//result.json");
			fw.write(obj.toString());
			fw.flush();
			fw.close();
		}
		catch(Exception e){
			e.printStackTrace();
		}
		finally {
			response.setContentType("application/json");
			response.getWriter();
		}
		
		
		//request.setAttribute("rest", resName);
		//RequestDispatcher rd = request.getRequestDispatcher("cityPage.jsp");
		//rd.forward(request,response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
