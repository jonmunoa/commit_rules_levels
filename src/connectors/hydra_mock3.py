# Ejemplo de contenido para hydra_mock3.py en src/connectors

class HydraMock3:
	def __init__(self):
		self.status = "initialized"

	def connect(self):
		print("Conectando con hydra_mock3...")
		self.status = "connected"

	def disconnect(self):
		print("Desconectando hydra_mock3...")
		self.status = "disconnected"

	def get_status(self):
		return self.status
