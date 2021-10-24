defmodule Cuself.Repo do
  use Ecto.Repo,
    otp_app: :cuself,
    adapter: Ecto.Adapters.Postgres
end
