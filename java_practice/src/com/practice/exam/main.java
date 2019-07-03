package com.practice.exam;

import java.sql.ResultSet;

import com.practice.db.Sql;

public class main {
	
	private static Sql sql;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String str1 = "aat";
		String str2 = "cat";
		
		Anagram an = new Anagram(str1, str2);
		
		Anagram an1 = new Anagram();
		
		an1.setStr(str1);
		an1.setCompareStr(str2);
		
		if(an.isAnagram() == true && an1.isAnagram() == true) {
			System.out.println("string matched");
		}else {
			System.out.println("string does not matched");
		}
		
		try {
			Sql.query("SELECT u.*, r.permission, r.position from user AS u left join role AS r ON u.id = r.user_id");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		System.exit(0);
	}

}
