package com.practice.exam;

import java.util.Arrays;

public class Anagram {
	
	private String str;
	private String compareStr;
	
	public Anagram(String str, String compareStr){
		this.str = str;
		this.compareStr = compareStr;
	}
	
	public Anagram(){}
	
	public String getStr() {
		return str;
	}

	public void setStr(String str) {
		this.str = str;
	}

	public String getCompareStr() {
		return compareStr;
	}

	public void setCompareStr(String compareStr) {
		this.compareStr = compareStr;
	}

	
	public boolean isAnagram() {
		
		if((str.length() != compareStr.length()) 
				|| compareStr.isEmpty() 
				|| str.isEmpty()
			){
			return false;
		}
		
		String ss = str.toLowerCase();
		String tt = compareStr.toLowerCase();
		
		char[] arr_s = ss.toCharArray();
		char[] arr_t = tt.toCharArray();
		
		Arrays.sort(arr_s);
		Arrays.sort(arr_t);
		
		String toStr_s = new String(arr_s);
		String toStr_t = new String(arr_t);
		return toStr_s.equals(toStr_t);
	}
}
