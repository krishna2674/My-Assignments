
class ReverseStringInJava {
    public static void main(String[] args) {
        String name = "Krishnamurthy";
        String reverseName = "";

        for (int i = name.length() - 1; i >= 0; i--) {
            reverseName = reverseName + name.charAt(i);
        }

        System.out.println("The reversed string is: " + reverseName);
    }
}    