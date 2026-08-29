// CareMate HIPAA-Compliant Telehealth WebRTC Signaling & Media Session Controller

export type WebRTCSessionState =
  | 'INITIALIZING'
  | 'WAITING_FOR_PHYSICIAN'
  | 'WAITING_FOR_PATIENT'
  | 'OFFER_SENT'
  | 'ANSWER_RECEIVED'
  | 'CONNECTED_ENCRYPTED'
  | 'RECONNECTING'
  | 'TERMINATED';

export interface TelehealthPeerMessage {
  sessionId: string;
  senderId: string;
  senderRole: 'PATIENT' | 'DOCTOR' | 'SYSTEM';
  type: 'OFFER' | 'ANSWER' | 'ICE_CANDIDATE' | 'MUTE_AUDIO' | 'MUTE_VIDEO' | 'CHAT_MESSAGE' | 'END_CALL';
  payload: any;
  timestamp: string;
}

export interface TelehealthSessionRoom {
  roomId: string;
  appointmentId: string;
  patientUserId: string;
  doctorUserId: string;
  state: WebRTCSessionState;
  encryptionKeyFingerprint: string;
  startTime?: Date;
  endTime?: Date;
  durationSeconds?: number;
  qualityMetrics: {
    averagePacketLossPercent: number;
    roundTripTimeMs: number;
    resolution: string;
  };
}

export class TelehealthSessionManager {
  private activeRooms: Map<string, TelehealthSessionRoom> = new Map();

  createRoom(appointmentId: string, patientUserId: string, doctorUserId: string): TelehealthSessionRoom {
    const roomId = `room_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const room: TelehealthSessionRoom = {
      roomId,
      appointmentId,
      patientUserId,
      doctorUserId,
      state: 'INITIALIZING',
      encryptionKeyFingerprint: `sha256_${Math.random().toString(36).substring(2, 15)}`,
      qualityMetrics: {
        averagePacketLossPercent: 0.1,
        roundTripTimeMs: 35,
        resolution: '1080p_FHD',
      },
    };
    this.activeRooms.set(roomId, room);
    return room;
  }

  getRoom(roomId: string): TelehealthSessionRoom | undefined {
    return this.activeRooms.get(roomId);
  }

  updateState(roomId: string, newState: WebRTCSessionState): void {
    const room = this.activeRooms.get(roomId);
    if (room) {
      room.state = newState;
      if (newState === 'CONNECTED_ENCRYPTED' && !room.startTime) {
        room.startTime = new Date();
      } else if (newState === 'TERMINATED' && room.startTime && !room.endTime) {
        room.endTime = new Date();
        room.durationSeconds = Math.floor((room.endTime.getTime() - room.startTime.getTime()) / 1000);
      }
    }
  }

  terminateRoom(roomId: string): void {
    this.updateState(roomId, 'TERMINATED');
    this.activeRooms.delete(roomId);
  }
}

export const telehealthSessionManager = new TelehealthSessionManager();
