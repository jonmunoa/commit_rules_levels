# Ejemplo de contenido para fichero.py en mock1

class Mock1Connector:
	def __init__(self):
		self.status = "initialized"

	def connect(self):
		print("Conectando con mock1...")
		self.status = "connected"

	def disconnect(self):
		print("Desconectando mock1...")
		self.status = "disconnected"

	def get_status(self):
		return self.status
