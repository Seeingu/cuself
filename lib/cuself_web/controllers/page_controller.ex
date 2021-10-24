defmodule CuselfWeb.PageController do
  use CuselfWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
