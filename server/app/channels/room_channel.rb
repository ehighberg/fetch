class RoomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    if params[:room].present?
      stream_from "Room_#{(params[:room])}"
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

end

