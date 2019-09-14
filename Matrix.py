from random import random
class Matrix:
	def __init__(self,rows,cols):
		self.rows = rows
		self.cols = cols
		self.data = [[0 for j in range(cols)] for i in range(rows)]

	def __repr__(self):
		return f"{self.data}"

	def add(self,a):
		if not isinstance(a,Matrix):
			num = a
			result = Matrix(self.rows,self.cols)
			result.data = [[self.data[i][j]+num for j in range(self.cols)] for i in range(self.rows)] 
			return result
		else:
			b = a
			a = self
			if a.rows != b.rows or a.cols != b.cols : return None
			result = Matrix(a.rows,a.cols)
			result.data = [[a.data[i][j]+b.data[i][j] for j in range(a.cols)] for i in range(a.rows)] 
			return result

	def mult(self,a):
		if not isinstance(a,Matrix):
			num = a
			result = Matrix(self.rows,self.cols)
			result.data = [[self.data[i][j]*num for j in range(self.cols)] for i in range(self.rows)] 
			return result	
		else:
			b = a
			a = self
			if a.cols != b.rows : return None
			result = Matrix(a.rows,b.cols)
			for i in range(result.rows):
				for j in range(result.cols):
					for k in range(result.rows+1):
						result.data[i][j] += a.data[i][k]*b.data[k][j] 
			return result
	
	def transpose(self):
		result = Matrix(self.cols,self.rows) 
		for i in range(self.rows):
			for j in range(self.cols):
				result.data[j][i] = self.data[i][j]
		return result

	def randomize(self,num):
		result = Matrix(self.rows,self.cols)
		result.data = [[random()*num//1 for j in range(self.cols)] for i in range(self.rows)] 
		return result

def main():
	m1 = Matrix(2,3).randomize(5)
	m2 = Matrix(2,3).randomize(5).transpose()
	m3 = m1.mult(m2)
	print(m1)
	print(m2)
	print(m3)
	
if __name__ == '__main__':
    main()
	 