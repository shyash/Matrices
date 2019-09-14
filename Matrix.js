class Matrix{
	constructor(rows,cols){
		this.rows = rows
		this.cols = cols
		this.data = []
		for (let i = 0; i < rows; i++) {
			this.data[i] = []
			for (let j = 0; j < cols; j++) {
				this.data[i][j] = 0
			}		
		}
	}
	
	static add(mat,num){
		let result = new Matrix(mat.rows,mat.cols) 
		for (let i = 0; i < result.rows; i++) {
			for (let j = 0; j < result.cols; j++) {
				result.data[i][j] = mat.data[i][j] + num
			}		
		}
		return result
	}
}