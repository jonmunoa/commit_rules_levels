# Ejemplo de contenido para fichero.py en mock_test

class MockTestConnector:
	def __init__(self):
		self.status = "initialized"

	def connect(self):
		print("Conectando con mock_test...")
		self.status = "connected"

	def disconnect(self):
		print("Desconectando mock_test...")
		self.status = "disconnected"

	def get_status(self):
		return self.status
