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

	transpose(){
		let result = new Matrix(this.cols,this.rows) 
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				result.data[j][i] = this.data[i][j]
			}		
		}
		return result
	}

	randomize(num){
		let result = new Matrix(this.rows,this.cols) 
		for (let i = 0; i < result.rows; i++) {
			for (let j = 0; j < result.cols; j++) {
				result.data[i][j] = Math.floor(Math.random()*num)
			}		
		}
		return result
	}
}