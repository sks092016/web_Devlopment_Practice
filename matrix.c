/*Date 21-04-2017 the following program demonstrate the spiraling of an arbitarary matrix 
the following program is dynamic allocation of the memory to the 2 Diamentional matrix
*/

#include<stdio.h>
#include<stdlib.h>

// spiraling a matrix

int main() {

int rows , coloumns ;

printf("Please enter the number of rows") ;

scanf("%d", &rows) ;

printf("Please enter the number of coloumns") ;

scanf("%d",&coloumns) ;

// Dynamic memory allocation to the matrix 

int *mat[rows];
        
for (int l=0; l<rows; l++)
{
    mat[l] = (int *)malloc(coloumns * sizeof(int));
}

int matrix_dia = rows * coloumns ; // maximum number of array elements

int k = 0 , x, y, w = 0, z = 1, i = 0, j =-1;

x = rows - 1 ;
y = coloumns - 1 ;
  
    while(k < matrix_dia) 
    {
        // forward row filling
        while (j < y && k < matrix_dia)
        {   
            j++ ; 
            k++ ;
            mat[i][j]=k ;
             
			
         }
			y = j - 1 ;
        
        // downward movement of the spiral
        while (i < x && k < matrix_dia)
        {
			i++ ;
            k++ ;
            mat[i][j]  = k ;

        }
        x = i - 1 ;
    
        // backward movement of the spiral
        while (j > w && k < matrix_dia)
        {
			j-- ;
            k++ ;
            mat[i][j]=k ;
			
           
        }
        w = j + 1 ;
        
        // upward movement of the spiral
        while (i > z && k < matrix_dia) // use i>z here
        {
			i-- ;
            k++ ;
            mat[i][j]  = k ;
			
           
        }
		
       z = i + 1 ; 
		
    }

// Printing the matrix 
   
    for (int m = 0 ; m < rows ; m++)
    {
        for (int n = 0 ; n < coloumns ; n++)
        {
            if(m == 0){
                printf(" %d " ,mat[m][n]);
            }  
            else {
                printf(" %d" ,mat[m][n]);
            } 
            
        }

        printf("\n");
    }
    
   return 0 ;
}
