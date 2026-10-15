public class twodArray {
    public static void main(String[] args) {
        int arr[][] = {{10,20,30},{40,50,60}};
        // System.out.println(arr[1][1]);
        // 2*3 -> matrix
        for(int x=0;x<arr.length;x++){
            // 2<2
            // arr[0]->3
            for(int y=0;y<arr[x].length;y++){
                // 3<3
                System.out.println(arr[x][y]);
                // arr[1][2]
            }
        }
    }
}
