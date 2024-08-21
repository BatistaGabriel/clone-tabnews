function status(request, response) {
  response.status(200).json({
    chave: "it seems to be working",
  });
}

export default status;
