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

	add(num){
		let result = new Matrix(this.rows,this.cols) 
		for (let i = 0; i < result.rows; i++) {
			for (let j = 0; j < result.cols; j++) {
				result.data[i][j] = this.data[i][j] + num
			}		
		}
		return result
	}

	mult(num){
		let result = new Matrix(this.rows,this.cols) 
		for (let i = 0; i < result.rows; i++) {
			for (let j = 0; j < result.cols; j++) {
				result.data[i][j] = this.data[i][j] * num
			}		
		}
		return result
	}
	
}