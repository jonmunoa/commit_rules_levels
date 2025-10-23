# Ejemplo de contenido para fichero.py en mock

class MockConnector:
	def __init__(self):
		self.status = "initialized"

	def connect(self):
		print("Conectando con el mock...")
		self.status = "connected"

	def disconnect(self):
		print("Desconectando el mock...")
		self.status = "disconnected"

	def get_status(self):
		return self.status
