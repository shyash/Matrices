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

	static add(a,b){
		if (a.rows != b.rows || a.cols != b.cols){
			return null
		}
		let result = new Matrix(a.rows,a.cols)
		for (let i = 0; i < result.rows; i++) {
			for (let j = 0; j < result.cols; j++) {
				result.data[i][j] = a.data[i][j] + b.data[i][j]
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

	static mult(a,b){
		if (a.cols != b.rows) return null
		let result = new Matrix(a.rows,b.cols)
		for (let i = 0; i < result.rows; i++) {
			for (let j = 0; j < result.cols; j++) {
				for (let k = 0; k < result.rows; k++) {
					result.data[i][j] += a.data[i][k]*b.data[k][j]
				} 
			}		
		}
		return result
	}
}