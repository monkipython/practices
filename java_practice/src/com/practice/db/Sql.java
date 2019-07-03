package com.practice.db;

import java.sql.*;

public class Sql {
	
	final private static String host = "localhost";
	final private static String user = "root";
	final private static String passwd = "klf4life";
	final private static String port = "3306";
	
	public static Connection getInstance() throws Exception {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			return DriverManager.getConnection("jdbc:mysql://" + host + ":" + port + "/exam?" 
					+ "&autoReconnect=true&useSSL=false&useUnicode=yes&characterEncoding=UTF-8", user, passwd );
		} catch(Exception e) {
			System.out.println(e.getMessage());
			System.out.println("Couldn't Connect!");
			throw new RuntimeException();
		}
	}
	
	public static ResultSet query(Connection connect, String q) throws Exception {
		ResultSet rs = null;
		try {
			Statement statement = connect.createStatement();
			rs = statement.executeQuery(q);
			close(connect);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return rs;
	}
	
	public static void query(String q) {
		Connection connect = null;
		try {
			connect = getInstance();
			Statement statement = connect.createStatement();
			ResultSet rs = statement.executeQuery(q);
			printResult(rs);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			close(connect);
		}
	}
	
	public static void printResult(ResultSet rs){
		
		System.out.println("________SQL Start________");
		try {
			int dataCount = rs.getMetaData().getColumnCount();
		
			for (int i = 1; i <= dataCount; i++){
		      System.out.print("|" + rs.getMetaData().getColumnName(i) + "|");
		    }
			
			while (rs.next()) {
				System.out.print(System.lineSeparator());
				for (int i = 1; i<= dataCount; i++){
			      System.out.print("|" + rs.getString(rs.getMetaData().getColumnName(i)) + "|");
			    }
				
			}
		}catch(SQLException e) {
			e.printStackTrace();
		}
		System.out.print(System.lineSeparator());
		System.out.println("________SQL End________");
	}
	
	public static int update(Connection connect, String q, String[] values) {
		int updateResult = 0;
		try {
			PreparedStatement preparedStatement = connect.prepareStatement(q);
			for(int i = 0; i < values.length; i++) {
				String value = values[i];
				preparedStatement.setString(i, value);
			}
			updateResult = preparedStatement.executeUpdate();
			close(connect);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return updateResult;
	}
	
	public static void update(String q, String[] values) {
		Connection connect = null;
		try {
			connect = getInstance();
			PreparedStatement preparedStatement = connect.prepareStatement(q);
			for(int i = 0; i < values.length; i++) {
				String value = values[i];
				preparedStatement.setString(i, value);
			}
			int updateResult = preparedStatement.executeUpdate();
			System.out.println("Affected row: " + updateResult);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			close(connect);
		}
	}
	
	public static void close(Connection connect){
		try {
			if(connect != null) {
				connect.close();
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
