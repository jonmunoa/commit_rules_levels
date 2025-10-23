# Ejemplo de contenido para fichero.py en hydra_mock

class HydraMockConnector:
	def __init__(self):
		self.status = "initialized"

	def connect(self):
		print("Conectando con hydra_mock...")
		self.status = "connected"

	def disconnect(self):
		print("Desconectando hydra_mock...")
		self.status = "disconnected"

	def get_status(self):
		return self.status
